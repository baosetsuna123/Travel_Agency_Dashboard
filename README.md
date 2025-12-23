# Travel Agency Dashboard

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/) [![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/) [![Appwrite](https://img.shields.io/badge/Appwrite-1.0-F02E65?style=for-the-badge&logo=appwrite)](https://appwrite.io/)

---

## Features

- 🚀 **Server-side rendering**
- ⚡️ **Hot Module Replacement (HMR)**
- 📦 **Asset bundling and optimization**
- 🔄 **Data loading and mutations**
- 🔒 **TypeScript by default**
- 🎉 **TailwindCSS for styling**
- 📖 [React Router docs](https://reactrouter.com/)

---

## Getting Started

### Installation

📦 Install the dependencies:

```bash
npm install
```

### Development

⚡️ Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

---

## Building for Production

📦 Create a production build:

```bash
npm run build
```

---

## Deployment

### Docker Deployment

🐳 To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

🛠️ If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`:

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

---

## Styling

🎨 This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
