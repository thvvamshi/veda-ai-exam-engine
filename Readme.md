# VedaAI Assessment Platform

<div align="center">

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge\&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge\&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?style=for-the-badge\&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge\&logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge\&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge\&logo=mongodb)
![Socket.io](https://img.shields.io/badge/Socket.io-Realtime-black?style=for-the-badge\&logo=socket.io)

### AI-Powered Assignment & Material Management Platform

A production-grade full-stack educational platform built with modern technologies, featuring assignment management, material uploads, real-time updates, responsive UI, and scalable architecture.

</div>

---

# 📌 Table of Contents

* [Overview](#-overview)
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Architecture](#-architecture)
* [System Design](#-system-design)
* [Project Structure](#-project-structure)
* [Installation](#-installation)
* [Environment Variables](#-environment-variables)
* [API Documentation](#-api-documentation)
* [Authentication Flow](#-authentication-flow)
* [Database Design](#-database-design)
* [Frontend Design System](#-frontend-design-system)
* [State Management](#-state-management)
* [Socket Events](#-socket-events)
* [Validation & Error Handling](#-validation--error-handling)
* [Performance Optimizations](#-performance-optimizations)
* [Security](#-security)
* [Deployment](#-deployment)
* [Testing](#-testing)
* [Future Improvements](#-future-improvements)
* [Author](#-author)

---

# 🚀 Overview

VedaAI Assessment Platform is a modern educational web application designed for students and educators to manage assignments, upload learning materials, and track academic workflows efficiently.

The platform follows a scalable full-stack architecture using React + TypeScript on the frontend and Node.js on the backend.

This project focuses heavily on:

* Pixel-perfect frontend implementation
* Production-grade folder architecture
* API-driven design
* Reusable component system
* Scalable backend structure
* Real-time communication
* Clean state management
* Type safety
* Responsive UI/UX

---

# ✨ Features

## 🎯 Core Features

### Student Dashboard

* View assignments
* Track assignment status
* Responsive assignment grid
* Empty state handling
* Real-time updates
* Assignment filtering
* Mobile responsive layout

### Upload Materials

* Upload educational materials
* Drag & drop support
* File validation
* Upload progress tracking
* Material preview support
* File type restrictions

### Sidebar Navigation

* Fully responsive sidebar
* Active route highlighting
* School profile card
* Mobile navigation support
* Reusable navigation items

### Assignment Management

* Assignment cards
* Due dates
* Status badges
* Progress indicators
* Subject categorization
* Dynamic rendering

### Realtime Features

* Live updates using Socket.io
* Instant assignment synchronization
* Upload notifications
* Real-time UI refresh

---

# 🛠 Tech Stack

## Frontend

| Technology            | Purpose                |
| --------------------- | ---------------------- |
| React 19              | UI Library             |
| TypeScript            | Type Safety            |
| Vite                  | Build Tool             |
| Tailwind CSS v4       | Styling                |
| React Router DOM      | Routing                |
| Zustand / Context API | State Management       |
| Axios                 | API Requests           |
| Socket.io Client      | Realtime Communication |
| React Hook Form       | Form Management        |
| Zod                   | Validation             |
| Framer Motion         | Animations             |

---

## Backend

| Technology           | Purpose                |
| -------------------- | ---------------------- |
| Node.js              | Runtime                |
| Express.js           | Backend Framework      |
| MongoDB / PostgreSQL | Database               |
| Prisma / Mongoose    | ORM/ODM                |
| JWT                  | Authentication         |
| Socket.io            | Realtime Communication |
| Multer               | File Uploads           |
| Cloudinary / AWS S3  | File Storage           |
| Bcrypt               | Password Hashing       |
| CORS                 | Cross-Origin Handling  |
| dotenv               | Environment Variables  |

---

# 🧱 Architecture

```text
┌─────────────────────┐
│     Frontend UI     │
│ React + TypeScript  │
└─────────┬───────────┘
          │ REST API
          ▼
┌─────────────────────┐
│     API Gateway     │
│   Express Backend   │
└─────────┬───────────┘
          │
 ┌────────┴────────┐
 ▼                 ▼
Database       File Storage
MongoDB        AWS S3
PostgreSQL     Cloudinary
```

---

# 🏗 System Design

## High-Level System Design

```text
Client Layer
│
├── Dashboard UI
├── Upload Material UI
├── Assignment UI
└── Socket Client

Application Layer
│
├── Controllers
├── Services
├── Middleware
├── Validation
└── Authentication

Data Layer
│
├── Database
├── File Storage
└── Cache Layer
```

---

## Request Flow

```text
User Action
   ↓
Frontend Component
   ↓
API Service Layer
   ↓
Axios Request
   ↓
Express Route
   ↓
Controller
   ↓
Service Layer
   ↓
Database Query
   ↓
Response
   ↓
Frontend State Update
```

---

# 📁 Project Structure

## Frontend Structure

```bash
src/
│
├── api/
│   ├── assignment.api.ts
│   ├── material.api.ts
│   └── auth.api.ts
│
├── components/
│   ├── assignment/
│   │   ├── AssignmentCard.tsx
│   │   ├── AssignmentGrid.tsx
│   │   └── EmptyAssignmentState.tsx
│   │
│   ├── sidebar/
│   │   ├── Sidebar.tsx
│   │   ├── SidebarItem.tsx
│   │   └── SchoolCard.tsx
│   │
│   ├── upload-material/
│   │   ├── UploadDropzone.tsx
│   │   ├── UploadProgress.tsx
│   │   └── MaterialPreview.tsx
│   │
│   └── mobile/
│       └── MobileNavbar.tsx
│
├── hooks/
├── layouts/
│   └── DashboardLayout.tsx
│
├── lib/
├── pages/
│   ├── DashboardPage.tsx
│   └── UploadMaterialPage.tsx
│
├── routes/
│   └── index.tsx
│
├── schemas/
├── sockets/
├── store/
├── styles/
├── types/
└── main.tsx
```

---

## Backend Structure

```bash
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── sockets/
│   ├── utils/
│   ├── validations/
│   └── server.ts
│
├── prisma/
├── uploads/
├── package.json
└── tsconfig.json
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/vedaai-platform.git
```

```bash
cd vedaai-platform
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 4️⃣ Start Frontend

```bash
npm run dev
```

---

## 5️⃣ Start Backend

```bash
npm run dev
```

---

# 🔐 Environment Variables

## Frontend `.env`

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

---

## Backend `.env`

```env
PORT=5000
DATABASE_URL=
JWT_SECRET=
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_BUCKET_NAME=
```

---

# 📡 API Documentation

# Base URL

```http
http://localhost:5000/api
```

---

# 🔑 Authentication APIs

## Register User

### Endpoint

```http
POST /auth/register
```

### Request Body

```json
{
  "name": "Vamshi",
  "email": "vamshi@example.com",
  "password": "password123"
}
```

### Response

```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token"
}
```

---

## Login User

### Endpoint

```http
POST /auth/login
```

### Request

```json
{
  "email": "vamshi@example.com",
  "password": "password123"
}
```

### Response

```json
{
  "success": true,
  "token": "jwt_token",
  "user": {
    "id": "123",
    "name": "Vamshi"
  }
}
```

---

# 📚 Assignment APIs

## Get Assignments

### Endpoint

```http
GET /assignments
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "title": "React Assignment",
      "subject": "Frontend",
      "status": "pending",
      "dueDate": "2026-05-30"
    }
  ]
}
```

---

## Create Assignment

### Endpoint

```http
POST /assignments
```

### Request

```json
{
  "title": "Node.js Assignment",
  "subject": "Backend",
  "dueDate": "2026-06-01"
}
```

### Response

```json
{
  "success": true,
  "message": "Assignment created successfully"
}
```

---

## Update Assignment Status

### Endpoint

```http
PATCH /assignments/:id
```

### Request

```json
{
  "status": "completed"
}
```

### Response

```json
{
  "success": true,
  "message": "Assignment updated"
}
```

---

# 📂 Material Upload APIs

## Upload Material

### Endpoint

```http
POST /materials/upload
```

### Request

```form-data
file: pdf/doc/image
```

### Response

```json
{
  "success": true,
  "fileUrl": "https://cdn-url/file.pdf"
}
```

---

## Get Materials

### Endpoint

```http
GET /materials
```

### Response

```json
{
  "success": true,
  "data": []
}
```

---

# 🔄 Socket Events

| Event              | Description          |
| ------------------ | -------------------- |
| assignment:created | New assignment added |
| assignment:updated | Assignment updated   |
| material:uploaded  | Material uploaded    |
| notification:new   | New notification     |

---

# 🔐 Authentication Flow

```text
User Login
   ↓
Credentials Validation
   ↓
JWT Token Generation
   ↓
Token Stored in Client
   ↓
Protected API Access
```

---

# 🗄 Database Design

## User Schema

```ts
{
  id: string
  name: string
  email: string
  password: string
  role: string
}
```

---

## Assignment Schema

```ts
{
  id: string
  title: string
  subject: string
  status: string
  dueDate: Date
  createdBy: string
}
```

---

## Material Schema

```ts
{
  id: string
  title: string
  fileUrl: string
  uploadedBy: string
  createdAt: Date
}
```

---

# 🎨 Frontend Design System

## Sidebar Specifications

### Desktop Sidebar

```text
Width: 304px
Min Width: 304px
Height: calc(100vh - 24px)
Border Radius: 16px
Padding: 24px
Background: #FFFFFF
```

---

## School Card

```text
Width: 256px
Height: 80px
Border Radius: 16px
Background: #F0F0F0
Padding: 12px
```

---

## Create Button

```text
Width: 256px
Height: 80px
Inner Pill: 56px
```

---

# 🧠 State Management

## Global State

* User State
* Authentication State
* Assignment State
* Material State
* Socket State

---

## State Flow

```text
API Request
   ↓
Store Update
   ↓
UI Re-render
   ↓
Socket Synchronization
```

---

# 🛡 Validation & Error Handling

## Frontend Validation

* Zod Schema Validation
* Form Validation
* File Validation
* Input Sanitization

---

## Backend Validation

* Request Validation
* JWT Validation
* File Validation
* Database Validation

---

# ⚡ Performance Optimizations

## Frontend

* Lazy Loading
* Code Splitting
* Memoization
* Optimized Re-renders
* Reusable Components
* Dynamic Imports

---

## Backend

* Database Indexing
* Optimized Queries
* Caching
* Async Processing
* File Compression

---

# 🔒 Security

## Security Features

* JWT Authentication
* Password Hashing
* CORS Protection
* Input Sanitization
* Environment Variable Protection
* Rate Limiting
* Secure File Uploads

---

# 🚀 Deployment

## Frontend Deployment

### Vercel

```bash
npm run build
```

---

## Backend Deployment

### Render / Railway / AWS

```bash
npm run build
```

---

# 🧪 Testing

## Frontend Testing

* Component Testing
* UI Testing
* Responsive Testing
* Form Validation Testing

---

## Backend Testing

* API Testing
* Authentication Testing
* Database Testing
* File Upload Testing

---

# 📈 Scalability Considerations

## Future Scale Enhancements

* Microservice Architecture
* Redis Caching
* CDN Integration
* Queue Processing
* Horizontal Scaling
* Kubernetes Deployment
* Load Balancing

---

# 🔮 Future Improvements

* AI-based Assignment Recommendations
* Video Lectures Integration
* AI Chat Assistant
* Real-time Collaboration
* Attendance Tracking
* Analytics Dashboard
* Notification System
* Dark Mode
* Role-Based Access Control

---

# 📷 Screenshots

## Dashboard

```text
Add dashboard screenshot here
```

---

## Upload Material

```text
Add upload page screenshot here
```

---

# 👨‍💻 Author

## Vamshi Kumar

* Full Stack Developer
* MERN Stack Developer
* System Design Enthusiast
* Backend & Cloud Focused Engineer

### LinkedIn

[https://www.linkedin.com/in/bodavamshikumar](https://www.linkedin.com/in/bodavamshikumar)

---

# ⭐ Why This Project Stands Out

This project demonstrates:

* Production-grade architecture
* Real-world scalable frontend structure
* Strong backend fundamentals
* API-first development
* Reusable component system
* Type-safe development
* Professional UI implementation
* Realtime communication architecture
* Clean code principles
* System design understanding

---

# 📜 License

This project is licensed under the MIT License.

---

<div align="center">

### Built with ❤️ using React, TypeScript, Node.js & Modern System Design Principles

</div>
