# SimpleNote

A minimal, cross-platform notepad app with rich text formatting and a classic ruled-paper look. Built with [Tauri v2](https://v2.tauri.app/).

![macOS](https://img.shields.io/badge/macOS-supported-brightgreen) ![Windows](https://img.shields.io/badge/Windows-supported-brightgreen) ![Linux](https://img.shields.io/badge/Linux-supported-brightgreen)

## Features

- **Rich text formatting** — bold, underline, strikethrough, text colors
- **Ruled notepad styling** — yellow paper with handwritten font
- **Auto-save** — saves automatically as you type (1.5s debounce)
- **Font zoom** — Ctrl/Cmd + Plus/Minus/0
- **Smart paste** — strips formatting from pasted content, preserving only bold
- **Pin to foreground** — keep the window always on top
- **Dark mode** — toolbar adapts to your OS theme
- **Tiny footprint** — ~10 MB installed, uses native OS webview

## Install

Download the latest release for your platform from the [Releases](https://github.com/wiz4rd-de/SimpleNote/releases) page:

| Platform | Format |
|----------|--------|
| macOS | `.dmg` |
| Windows | `.msi` / `.exe` (NSIS) |
| Linux | `.deb` / `.AppImage` |

## Build from Source

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Rust](https://rustup.rs/) 1.70+
- Linux only: `libwebkit2gtk-4.1-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev`

### Steps

```bash
npm install
npm run tauri dev      # development with hot reload
npm run tauri build    # production build + installer
```

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Bold | Ctrl/Cmd + B |
| Underline | Ctrl/Cmd + U |
| Strikethrough | Ctrl/Cmd + Shift + S |
| Zoom in | Ctrl/Cmd + Plus |
| Zoom out | Ctrl/Cmd + Minus |
| Reset zoom | Ctrl/Cmd + 0 |

## Data Storage

Notes are saved as HTML in your OS application data directory:

| OS | Location |
|----|----------|
| macOS | `~/Library/Application Support/com.simplenote.desktop/note.html` |
| Windows | `%APPDATA%\com.simplenote.desktop\note.html` |
| Linux | `~/.local/share/com.simplenote.desktop/note.html` |

## Tech Stack

- **Frontend** — TypeScript, [Tiptap](https://tiptap.dev/) (ProseMirror), Vite
- **Backend** — Rust, Tauri v2
- **Packaging** — Tauri bundler (DMG, MSI, NSIS, deb, AppImage)

## License

MIT
