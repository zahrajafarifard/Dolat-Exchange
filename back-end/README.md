# Dolat Exchange Backend

Node.js backend API for Dolat Exchange. It serves REST endpoints, manages exchange data through Sequelize models, handles file uploads, exposes static business documents, and provides realtime updates through Socket.IO.

## Features

- Express API for public website and desktop administration client
- Sequelize models for currencies, coins, prices, archives, users, messages, gallery items, notifications, and news
- MySQL database integration
- Initial database seed routines for core exchange data
- Static hosting for uploaded images, forms, rules, and news photos
- Socket.IO server for realtime client updates
- Application version guard for desktop client access

## Tech Stack

- Node.js
- Express
- Sequelize
- MySQL
- Socket.IO
- Multer
- JSON Web Token
- Nodemailer

## Setup

Create a MySQL database, then configure the environment:

```bash
npm install
cp .env.example .env
npm start
```

By default, the server listens on port `4000`.

## Scripts

```bash
npm start  # Start the API with nodemon
npm test   # Placeholder test script
```

## Environment Variables

See `.env.example`.

| Variable | Description | Default |
| --- | --- | --- |
| `PORT` | API server port | `4000` |
| `VERSION` | Required desktop app version header | `1` |
| `DB_NAME` | MySQL database name | `dolat-db` |
| `DB_USER` | MySQL username | `root` |
| `DB_PASSWORD` | MySQL password | empty |
| `DB_HOST` | MySQL host | `localhost` |
| `DB_PORT` | MySQL port | `3306` |

## Author

Zahra Jafarifard

