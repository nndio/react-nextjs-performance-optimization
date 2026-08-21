# React Performance Optimization & Next.js Migration

A practical front-end project focused on improving application performance with dynamic imports and migrating a React application to Next.js.

## 📌 About the Project

The project consists of two stages:

1. **React application optimization**
   - Implemented dynamic imports using `lazy()`.
   - Added `Suspense` for loading states.
   - Split application pages into separate JavaScript chunks.
   - Built and tested the application in production mode.
   - Measured loading performance using Lighthouse.

2. **Migration to Next.js**
   - Recreated the application using Next.js App Router.
   - Migrated React Router routes to the Next.js file-based routing system.
   - Converted components to Server Components where possible.
   - Removed unnecessary React hooks such as `useState`, `useEffect`, and `useCallback`.
   - Integrated Ant Design with `@ant-design/nextjs-registry`.
   - Built and tested the application in production mode.
   - Measured performance using Lighthouse.

## 🚀 Features

The application contains several pages with test data:

- Home
- Posts
- Albums
- Todos

Data is loaded from the JSONPlaceholder API.

### Routes

```text
/
├── /posts
├── /albums
└── /todos
