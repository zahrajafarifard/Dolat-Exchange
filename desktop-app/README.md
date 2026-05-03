# Dolat Exchange Desktop App

Electron desktop administration client for Dolat Exchange. The app provides an internal interface for managing exchange data, media, and news while communicating with the backend API.

## Features

- Desktop admin experience built with Electron and React
- Currency and coin management screens
- News and image upload workflows
- Version-aware API access through request headers
- Redux state management with persisted state
- Cross-platform packaging configuration for Windows, macOS, and Linux

## Tech Stack

- Electron
- React 18
- React Router
- Redux and Redux Toolkit
- Sass
- MySQL/Sequelize dependencies for local integration support
- Electron Builder

## Setup

```bash
npm install
cp .env.example .env
npm start
```

Run the Electron shell in a second terminal when needed:

```bash
npm run electron
```

## Scripts

```bash
npm start                  # Start the React development server
npm run build              # Build the React app
npm run electron           # Launch Electron
npm run electron:package:win
npm run electron:package:mac
npm run electron:package:linux
npm test
```

## Environment Variables

See `.env.example`.

| Variable | Description |
| --- | --- |
| `REACT_APP_URL` | Backend API base URL |
| `REACT_APP_SECRET_KEY` | Application token used by the desktop client |

## Author

Zahra Jafarifard

