import os, sys, json
from PIL import Image, ImageDraw
sys.path.insert(0, os.path.dirname(__file__))
from icon import icon, quarter, COBALT, WHITE, IPE
out = sys.argv[1]
os.makedirs(f"{out}/icons", exist_ok=True); os.makedirs(f"{out}/splash", exist_ok=True)
for size, name, inset in [(180,"apple-touch-icon.png",0.17),(192,"icon-192.png",0.17),(512,"icon-512.png",0.17),(512,"icon-maskable-512.png",0.27),(32,"favicon-32.png",0.12)]:
    icon(1024, inset, 2).resize((size,size), Image.LANCZOS).save(f"{out}/icons/{name}", optimize=True)
DEVICES = [  # css width, css height, pixel ratio
  (440,956,3),(402,874,3),(420,912,3),(430,932,3),(393,852,3),(428,926,3),(390,844,3),(375,812,3),(414,896,3),(414,896,2),(375,667,2),(320,568,2)]
links = []
mark = icon(1024, 0.0, 2)  # full-bleed mark on cobalt
for w,h,r in DEVICES:
    W,H = w*r, h*r
    im = Image.new("RGB",(W,H),COBALT)
    s = int(W*0.36)
    m = mark.resize((s,s), Image.LANCZOS)
    im.paste(m, ((W-s)//2, int(H*0.42 - s/2)))
    fn = f"splash-{W}x{H}.png"
    im.save(f"{out}/splash/{fn}", optimize=True)
    links.append(f'<link rel="apple-touch-startup-image" media="screen and (device-width: {w}px) and (device-height: {h}px) and (-webkit-device-pixel-ratio: {r}) and (orientation: portrait)" href="splash/{fn}">')
open(f"{out}/splash-links.html","w").write("\n".join(links))
print("assets", len(DEVICES), "splash screens")
