#!/bin/sh
set -e
cd "$(dirname "$0")"
JS="src/content-verbs.js src/content-structure.js src/content-pro.js src/content-scenarios.js src/platform.js src/app-core.js src/app-ui.js src/app-actions.js"
mkdir -p dist/app/vendor
# combined app script
{ printf '"use strict";\n'; cat $JS; } > dist/app.js
node --check dist/app.js
VERSION=$(cat dist/app.js src/styles.css src/index-pwa.html src/sw.js | sha1sum | cut -c1-10)
# 1) claude.ai artifact (single file)
{
  printf '<title>Papo de Gabinete</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n'
  printf '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
  printf '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@500;700&display=swap">\n'
  printf '<style>\n'; cat src/styles.css; printf '</style>\n<div id="app"></div>\n<script>\n'
  cat dist/app.js
  printf '\n</script>\n'
} > dist/papo.html
# 2) installable iPhone app (static site)
python3 tools/assets.py dist/app >/dev/null
cp dist/app.js dist/app/app.js
cp ../sdkbuild/anthropic-sdk.js dist/app/vendor/anthropic-sdk.js
python3 - "$VERSION" <<'PY'
import sys, json
v = sys.argv[1]
t = open("src/index-pwa.html").read()
t = t.replace("{{CSS}}", open("src/styles.css").read()).replace("{{SPLASH}}", open("dist/app/splash-links.html").read()).replace("{{VERSION}}", v)
open("dist/app/index.html", "w").write(t)
open("dist/app/sw.js", "w").write(open("src/sw.js").read().replace("{{VERSION}}", v))
json.dump({"name": "Papo de Gabinete", "short_name": "Papo", "description": "Brazilian Portuguese conversation coach for What Works Cities meetings.",
  "lang": "pt-BR", "start_url": "./", "scope": "./", "display": "standalone", "orientation": "portrait",
  "background_color": "#1D4C9E", "theme_color": "#1D4C9E",
  "icons": [{"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
            {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
            {"src": "icons/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}]},
  open("dist/app/manifest.webmanifest", "w"), ensure_ascii=False, indent=1)
PY
rm -f dist/app/splash-links.html
touch dist/app/.nojekyll
echo "built $VERSION"; du -sh dist/app; wc -c dist/papo.html
