# SureshEcom — Full-Stack E-Commerce Demo

[![CI](https://github.com/suresh294/suresh-ecom/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/suresh294/suresh-ecom/actions/workflows/ci.yml)

SureshEcom is a full-stack e-commerce practice project with a React storefront and an Express API. It demonstrates product browsing, category filtering, price sorting, a cart flow, API integration, and a Docker Compose development setup.

> **Demo status:** A verified public deployment URL has not been confirmed. The instructions below run the project locally.

## Features

- Browse products and filter/sort the product list.
- Add and update cart items through the API.
- Preserve cart state in the browser between refreshes.
- Responsive React interface with custom CSS.
- Express API with centralized error handling and request logging.
- Docker Compose configuration for local frontend/backend development.

## Technology Stack

| Area | Technology |
|---|---|
| Frontend | React, Vite, React Router, Axios, Lucide |
| Backend | Node.js, Express |
| Development | Docker, Docker Compose |

## Prerequisites

- Node.js and npm
- Docker Desktop (optional, for the container workflow)

## Run with Docker Compose

From the repository root:

```bash
docker compose up --build
```

Open `http://localhost:5173` in your browser. The frontend's Vite development server proxies `/api` requests to the backend service in the Compose network.

Stop the services with `Ctrl+C`; run `docker compose down` to remove the stopped containers.

## Run without Docker

### Backend

```bash
cd backend
npm ci
npm start
```

### Frontend

In a second terminal:

```bash
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Tests and Build

Run the backend smoke tests:

```bash
npm test --prefix backend
```

Build the frontend for production:

```bash
npm run build --prefix frontend
```

The backend tests currently cover the API root response and JSON 404 behavior. They are smoke tests, not comprehensive coverage of product/cart business logic or database integration.

## Configuration and Security

The backend may require environment variables for any external/database configuration used by the current implementation. Keep credentials in local environment files and never commit real secrets. Before deploying publicly, review CORS settings, error responses, input validation, dependency audit results, and persistence behavior.

## Repository

[View SureshEcom on GitHub](https://github.com/suresh294/suresh-ecom)
