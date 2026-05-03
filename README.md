# Dolat Exchange

Full-stack exchange management platform with a public website, an Electron desktop administration app, and an Express/MySQL backend API.

## Projects

| Project | Description | Stack |
| --- | --- | --- |
| [`site`](./site) | Public-facing Dolat Exchange website with exchange rates, coin prices, news, gallery, rules, forms, and contact pages. | React, Redux Toolkit, Tailwind CSS, Socket.IO client |
| [`desktop-app`](./desktop-app) | Desktop administration client for managing currencies, coins, news, gallery images, and application version access. | Electron, React, Redux, Electron Builder |
| [`back-end`](./back-end) | API server, database models, uploads, static document hosting, and realtime socket gateway. | Node.js, Express, Sequelize, MySQL, Socket.IO |

## Repository Structure

```text
Dolat-Exchange/
|-- back-end/      # Express API and database models
|-- desktop-app/  # Electron + React desktop client
`-- site/         # Public React website
```

## Getting Started

Each project has its own dependencies and README. Install and run the backend first, then start the website or desktop app.

```bash
cd back-end
npm install
npm start
```

```bash
cd site
npm install
npm start
```

```bash
cd desktop-app
npm install
npm start
```

## Environment

Environment files are intentionally excluded from source control. Use the included `.env.example` files as a template for local setup.

## Author

Zahra Jafarifard
