# Dolat Exchange Website

Public React website for Dolat Exchange. The site presents live currency and coin pricing, business information, news, galleries, downloadable forms, exchange rules, and contact details.

## Features

- Currency and coin price screens with reusable price components
- News, gallery, about, contact, rules, and forms pages
- Persian calendar/time support with Jalali Moment and custom clock components
- Redux Toolkit state management with persisted state
- Socket.IO client integration for realtime updates
- Tailwind CSS and Sass styling
- Sitemap generation support

## Tech Stack

- React 18
- React Router
- Redux Toolkit and React Redux
- Tailwind CSS
- Sass
- Socket.IO Client
- Swiper
- Victory charts

## Setup

```bash
npm install
cp .env.example .env
npm start
```

The development server runs through Create React App.

## Scripts

```bash
npm start      # Start the development server
npm run build  # Create a production build
npm test       # Run tests in watch mode
npm run sitemap
```

## Environment Variables

See `.env.example`.

| Variable | Description |
| --- | --- |
| `REACT_APP_URL` | Backend API base URL |

## Author

Zahra Jafarifard

