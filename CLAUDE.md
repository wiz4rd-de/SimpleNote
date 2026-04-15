# CLAUDE.md

## Branching & workflow

- Create feature branches off `main` (e.g. `feature/add-dark-mode`, `website/landing-page`)
- Open a PR against `main` — no direct pushes to `main`
- Version is auto-bumped (patch) on PR; add `minor` or `major` label for bigger bumps

## Releases

- Merging a PR auto-creates a `v*` tag and triggers the CI build
- CI builds installers for macOS (.dmg), Windows (.msi/.exe), Linux (.deb/.AppImage)
- Publish the resulting draft release on GitHub Releases

## Tech stack

- Frontend: TypeScript, Tiptap, Vite
- Backend: Rust, Tauri v2
- Website: plain HTML/CSS in `website/` (hosted on checkdomain.de, deployed via FTP)
