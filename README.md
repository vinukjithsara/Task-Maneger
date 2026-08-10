# � WorkTrack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![SQL](https://img.shields.io/badge/SQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

# 📌 Overview

A modern full-stack task management web application built using **React**, **TypeScript**, **Node.js**, and **Express.js**.  
The application helps users organize daily workflows, manage priorities, track deadlines, and improve productivity with a clean and responsive interface.

---

# 🌐 Live Demo

🚀 **[View Live Application](https://task-maneger-three.vercel.app)**

<a href="https://youtu.be/dZYch9NAEYk" target="_blank"><img width="1919" height="1019" alt="Watch the video" src="./src/assets/dashboard.png" /></a>
---

# ✨ Features

## 📋 Task Management
- Create tasks with titles, descriptions, and due dates
- Edit existing tasks
- Delete completed or unnecessary tasks
- View detailed task information

## 🚦 Priority System
- High Priority
- Medium Priority
- Low Priority

## 🤖 AI Chatbot

- Ask natural-language questions about your tasks
- Get answers like "How many tasks do I have today?"
- The backend retrieves the user's task data from the database
- The user's task data and question are sent to Groq for processing
- The AI-generated answer is returned to the frontend through the backend

## 🔐 Authentication
- Secure JWT-based authentication
- User signup and login system
- Protected routes and session handling

## 🎨 Responsive User Interface
- Modern dashboard layout
- Mobile-friendly responsive design
- Smooth navigation experience
- Reusable React components

## ⚡ Backend API
- RESTful API architecture
- Full CRUD functionality
- SQL database integration
- Secure data handling

---

# 🛠️ Tech Stack

## Frontend
| Technology | Purpose |
|---|---|
| React | UI Development |
| TypeScript | Type Safety |
| Vite | Build Tool |
| CSS | Styling |

## Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| PostgreSQL (Supabase) | Database |
| Groq | AI chatbot |

---

# 🏗️ System Architecture

                 ┌─────────────┐
                 │  Frontend   │
                 └──────┬──────┘
                        │
              How many tasks do I
                 have to day?
                        │
                        ▼
                 ┌─────────────┐
          Answer │   Server    │ ◄──────── Answer ────────┐
        ─────────┤             ├───────────────►           │
                 └──────┬──────┘                     ┌─────────────┐
                        │                            │  AI Server  │
                        │                            └──────┬──────┘
                        │                                   │
                        │        How many tasks do I        │
                        │             have today?           │
                        │                                   │
                        │                                   │
                        │                                   │
                        ▼                                   │
                 ┌─────────────┐                            │
                 │  Database   │                            │
                 └─────────────┘                            │
                        │                                   │
                        └──────── RESPONSE DATA ────────────┘

        Frontend ◄──────── RESPONSE DATA ──────── Server

# 📸 Screenshots

## 🖥️ Dashboard
![Dashboard](./src/assets/dashboard.png)
![Dashboard 2](./src/assets/dashboard2.png)

## ➕ Create Task
![Create Task](./src/assets/create-task.png)

## ✏️ Edit Task
![Edit Task](./src/assets/edit-task.png)

## 🔐 Authentication
![Authentication](./src/assets/auth.png)

---

# 🚀 Getting Started

## 📋 Prerequisites

Make sure your system has:

- Node.js (v18 or later)
- npm
- Git
- A Postgres database (Supabase or otherwise)

---

# 💻 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/vinukjithsara/react.git
cd react/my-react-app
```

---

## 2️⃣ Install Dependencies

```bash
npm install
cd "../Backend Worktrack" && npm install && cd -
```

---

## 3️⃣ Configure Environment Variables

Copy `.env.example` to `.env` in `my-react-app/` (project root, not `src/`):

```env
VITE_API_URL=http://localhost:5000
```

Backend `.env` (in `Backend Worktrack/`):

```env
DATABASE_URL=postgresql://...
FRONTEND_URL=http://localhost:5173
PORT=5000
GROQ_API_KEY=
GMAIL_USER=
GMAIL_APP_PASSWORD=
```

---

## 4️⃣ Run Locally

```bash
npm run dev                     # frontend, in my-react-app/
node server.js                  # backend, in Backend Worktrack/
```

---

## 5️⃣ Deploy

Frontend deploys to Vercel; backend deploys to Render. Push to the connected branches for each.

---

# 📁 Project Structure

```text
src/
├── components/
├── pages/
└── assets/

Backend Worktrack/
├── server.js
├── db.js
├── mailer.js
└── package.json
```

---

# 🔌 API Endpoints

## 📋 Task Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks/:userId` | Get all tasks for a user |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update task |
| PUT | `/api/tasks/complete/:id` | Mark task completed |
| DELETE | `/api/tasks/:id` | Delete task |

## 🔐 Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/register` | Register user |
| POST | `/api/login` | Login user |

## 🤖 AI Assistant

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/chatbot` | Ask the AI assistant about your tasks |

---

# 🔧 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start frontend |
| `npm run build` | Build application |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

# 🛠️ Troubleshooting

## Port Already In Use

```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173 -ErrorAction Ignore).OwningProcess | Stop-Process
```

---

## Frontend Cannot Connect to Backend

- Verify the backend server is running
- Check `VITE_API_URL` in `my-react-app/.env` (must be in the project root, not `src/`)
- Inspect the browser console for CORS issues — the backend's `FRONTEND_URL` env var must match the origin you're browsing from exactly

---

## Database Connection Issues

- Verify `DATABASE_URL` in `Backend Worktrack/.env`
- Confirm the Postgres database is reachable and the `users`/`tasks` tables exist

---

## Dependency Errors

```bash
rm -r node_modules package-lock.json
npm install
```

---

# 🤝 Contributing

Contributions are welcome!

## Steps

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit changes

```bash
git commit -m "Add your feature"
```

4. Push changes

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

# 🐞 Reporting Issues

When reporting bugs, please include:

- Problem description
- Steps to reproduce
- Expected behavior
- Screenshots if applicable

---

# 📜 License

This project is developed for educational and portfolio purposes.

---

# 👨‍💻 Author

**Vinuk Jithsara**

- Full-Stack Developer
- Passionate about modern web applications and clean UI design

---

Made with ❤️ using React, TypeScript, Node.js, and Express.js.
