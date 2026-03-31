# Full-Stack Interview Platform

A scalable, real-time interview platform designed for conducting technical interviews with live coding, video communication, and automated evaluation. The system follows a backend-focused architecture with emphasis on security, performance, and real-time interactions.

---

## Overview

This platform enables one-on-one technical interviews with an integrated coding environment, real-time communication, and automated feedback. It is designed to replicate real interview conditions while ensuring secure code execution and efficient data handling.

---

## Tech Stack

### Backend
- Node.js and Express.js for REST API and server-side logic  
- MongoDB for data storage (users, sessions, interview data)  
- Clerk for authentication and user management  
- Stream for video calling, chat, and real-time communication  
- Inngest for background jobs and asynchronous workflows  

### Frontend
- React (Vite)  
- TanStack Query for data fetching and caching  

---

## Core Features

- Authentication and authorization  
- One-on-one interview rooms (restricted to two participants)  
- Real-time video and chat communication  
- Live code editor with execution support  
- Automated code evaluation based on test cases  
- Background job processing for async tasks  
- Dashboard with interview data and metrics  
- Practice mode for individual coding  
- Secure room access and management  

---

## Environment Configuration

### Backend (`/backend`)

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

### Frontend (`/frontend`)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## Running the Project

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Start Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Notes

- Ensure all environment variables are properly configured before running the application  
- Backend runs on http://localhost:3000  
- Frontend runs on http://localhost:5173  
- Valid API keys are required for Clerk, Stream, and Inngest  

---

## Architecture Highlights

- Modular REST API design using Express  
- Event-driven background processing with Inngest  
- Real-time communication powered by Stream  
- Secure authentication and session management using Clerk  
- Scalable database schema using MongoDB  
