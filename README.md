# Papo de Gabinete

A Brazilian Portuguese conversation coach for meetings with Brazilian government officials about the What Works Cities Certification. Role-play with eleven officials, get every answer corrected with the grammar rule behind it, drill the topics you miss, and review automatic flashcards.

## Install on iPhone

1. Open the app's GitHub Pages address in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. Open it from the new icon. It runs full-screen, like an app, and works offline for lessons, drills and flashcards.

## Connections

Open **Conexões** in the app (home screen setup card, or Progresso → Ajustes):

- **Anthropic API key** (required for conversations): plays the officials and writes corrections, hints and new exercises using Claude.
- **OpenAI API key** (recommended): in-app microphone with transcription that keeps Spanish words as spoken, and natural Brazilian voices.
- **ElevenLabs API key** (optional): the most realistic voices.

Keys are stored only on the device, in the app's local storage, and are sent only to the provider they belong to. Progress and flashcards are stored on the device.

## Layout

- `index.html`, `app.js`, `sw.js`, `manifest.webmanifest`, `icons/`, `splash/`, `vendor/`: the published app (static files, no server code).
- `source/`: the editable sources and the build script that produces those files.
