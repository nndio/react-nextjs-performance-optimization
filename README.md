# Personal Notes

A full-stack web application for creating and managing personal notes.

The project consists of a React frontend and an Express backend. The frontend communicates with the server through an API, while authentication is implemented using JSON Web Tokens and cookies.

## Technologies

### Frontend

* React
* TypeScript
* Vite
* TanStack React Query
* React Hook Form
* Zod
* ESLint

### Backend

* Node.js
* Express
* TypeScript
* JSON Web Token (JWT)
* Cookie Parser
* CORS
* LowDB
* Zod

## Project Structure

```text
ReactJS/
├── client/      # React frontend
├── server/      # Express backend
├── example/     # Application screenshots
└── README.md
```

## Screenshots

### Authentication

![Authentication](./example/auth.jpg)

### Notes List

![Notes List](./example/noteList.jpg)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nndio/ReactJS.git
cd ReactJS
```

### 2. Start the frontend

```bash
cd client
npm install
npm run dev
```

### 3. Start the backend

Open a new terminal window:

```bash
cd server
npm install
npm run dev
```

The frontend will be started using Vite, and the backend will run using `tsx watch`.

## Available Commands

### Client

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### Server

```bash
npm run dev
```

## What I Learned

While building this project, I practiced:

* Building a React application with TypeScript
* Managing server state with TanStack React Query
* Creating and validating forms with React Hook Form and Zod
* Connecting a frontend application to an Express backend
* Working with authentication using JWT and cookies
* Validating data on the client and server
* Organizing a full-stack application into separate client and server parts
* Working with API requests and error handling

## Author

**Anastasia Vahnovan**

Aspiring Frontend Developer
