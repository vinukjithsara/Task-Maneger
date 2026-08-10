# WorkTrack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![SQL](https://img.shields.io/badge/SQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## Overview

WorkTrack is a modern full-stack task management web application built with React, TypeScript, Node.js, Express.js, and PostgreSQL.

It helps users organize daily work, manage priorities, track deadlines, and get quick answers through an AI chatbot that understands the user's task data.

---

## Live Demo

**[View Live Application](https://task-maneger-three.vercel.app)**

<a href="https://youtu.be/dZYch9NAEYk" target="_blank">
  <img width="1919" height="1019" alt="Watch the video" src="./src/assets/dashboard.png" />
</a>

---

## Features

### Task Management
- Create tasks with titles, descriptions, and due dates
- Edit existing tasks
- Delete completed or unnecessary tasks
- View detailed task information

### Priority System
- High priority
- Medium priority
- Low priority

### Authentication
- Secure JWT-based authentication
- User signup and login
- Protected routes and session handling

### AI Chatbot
- Ask natural-language questions about your tasks
- Get answers like "How many tasks do I have today?"
- Uses the current user's task data as context
- Powered by Groq through the backend `/api/chatbot` route

### Responsive UI
- Modern dashboard layout
- Mobile-friendly design
- Smooth navigation
- Reusable React components

### Backend API
- RESTful API architecture
- Full CRUD functionality
- SQL database integration
- Secure data handling

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React | UI development |
| TypeScript | Type safety |
| Vite | Build tool |
| CSS | Styling |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Backend framework |
| PostgreSQL (Supabase) | Database |
| Groq | AI chatbot |

---

## System Architecture

```mermaid
flowchart LR
    F[Frontend] -->|Question: "How many tasks do I have today?"| S[Server]
    S -->|Fetch task records| D[(Database)]
    D -->|Task data| S
    S -->|Send task context + question| A[AI Server]
    A -->|Answer| S
    S -->|Response data| F
```

### Architecture Flow

1. The frontend sends a user question to the backend server.
2. The server reads the user's task data from the database.
3. The server sends the task context and question to the AI server.
4. The AI server generates a natural-language answer.
5. The backend returns the response data to the frontend.

---

## Screenshots

### Dashboard
![Dashboard](./src/assets/dashboard.png)
![Dashboard 2](./src/assets/dashboard2.png)

### Create Task
![Create Task](./src/assets/create-task.png)

### Edit Task
![Edit Task](./src/assets/edit-task.png)

### Authentication
![Authentication](./src/assets/auth.png)

---

## Getting Started

### Prerequisites

Make sure your system has:

- Node.js v18 or later
- npm
- Git
- A PostgreSQL database such as Supabase

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/vinukjithsara/react.git
cd react/my-react-app
```

### 2. Install Dependencies

```bash
npm install
cd "../Backend Worktrack" && npm install && cd -
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` in `my-react-app/`:

```env
VITE_API_URL=http://localhost:5000
```

Backend `.env` in `Backend Worktrack/`:

```env
DATABASE_URL=postgresql://...
FRONTEND_URL=http://localhost:5173
PORT=5000
GROQ_API_KEY=
GMAIL_USER=
GMAIL_APP_PASSWORD=
```

### 4. Run Locally

```bash
npm run dev
```

Run the backend separately from `Backend Worktrack/`:

```bash
node server.js
```

### 5. Deploy

Frontend deploys to Vercel, and backend deploys to Render. Push to the connected branches for each.

---

## Project Structure

```text
my-react-app/
├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
└── public/

Backend Worktrack/
├── server.js
├── db.js
├── mailer.js
└── package.json
```

---

## API Endpoints

### Task Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks/:userId` | Get all tasks for a user |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| PUT | `/api/tasks/complete/:id` | Mark a task completed |
| DELETE | `/api/tasks/:id` | Delete a task |

### Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/register` | Register a user |
| POST | `/api/login` | Login a user |

### AI Assistant

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/chatbot` | Ask the AI assistant about the user's tasks |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the frontend |
| `npm run build` | Build the application |
| `npm run preview` | Preview the production build |

---

## Troubleshooting

### Port Already In Use

```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173 -ErrorAction Ignore).OwningProcess | Stop-Process
```

### Frontend Cannot Connect to Backend

- Verify the backend server is running
- Check `VITE_API_URL` in `my-react-app/.env`
- Make sure `FRONTEND_URL` in the backend matches the browser origin exactly

### Database Connection Issues

- Verify `DATABASE_URL` in `Backend Worktrack/.env`
- Confirm the PostgreSQL database is reachable
- Make sure the `users` and `tasks` tables exist

### Dependency Errors

```bash
rm -r node_modules package-lock.json
npm install
```

---

## Contributing

Contributions are welcome.

### Steps

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add your feature"
```

4. Push the branch

```bash
git push origin feature/your-feature
```

5. Open a pull request

---

## Reporting Issues

When reporting bugs, please include:

- Problem description
- Steps to reproduce
- Expected behavior
- Screenshots if applicable

---

## License

This project is developed for educational and portfolio purposes.

---

## Author

**Vinuk Jithsara**

- Full-Stack Developer
- Passionate about modern web applications and clean UI design

---

Made with love using React, TypeScript, Node.js, and Express.js.
