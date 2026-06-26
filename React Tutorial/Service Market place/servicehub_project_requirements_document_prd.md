# ServiceHub - Full-Stack Service Marketplace PRD

## 1. Project Overview
ServiceHub is a platform connecting users (Customers) with skilled workers for repair and construction services. It features role-based access, job management, and location-based matching.

## 2. Tech Stack
- **Frontend:** React.js, Tailwind CSS, Lucide React (icons), Framer Motion (animations)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Geospatial queries for location matching)
- **Real-time:** Socket.io (for chat and notifications)
- **Auth:** JWT (JSON Web Tokens)

## 3. Database Schema (MongoDB)
### User/Worker Collection
- `id`: UUID
- `role`: 'customer' | 'worker'
- `name`: String
- `email`: String (unique)
- `password`: String (hashed)
- `location`: { type: "Point", coordinates: [longitude, latitude] }
- `skills`: Array (for workers)
- `rating`: Number
- `bio`: String

### Job Collection
- `id`: UUID
- `customerId`: Reference to User
- `title`: String
- `description`: String
- `category`: String
- `budget`: Number
- `location`: { type: "Point", coordinates: [longitude, latitude] }
- `status`: 'open' | 'in-progress' | 'completed' | 'cancelled'
- `applicants`: Array of Worker IDs

## 4. Folder Structure
### Backend
/server
  /config (db, passport)
  /controllers (auth, jobs, users, chat)
  /models (User, Job, Message)
  /routes (api routes)
  /middleware (auth, error handling)
  index.js

### Frontend
/client
  /src
    /components (shared UI elements)
    /pages (all 12-14 screens)
    /hooks (useAuth, useSocket)
    /context (AuthContext, JobContext)
    /utils (api helpers, formatting)
    App.js

## 5. Screen List & Flow
1. **Landing Page:** Hero, Categories, How it Works.
2. **Login/Register:** Multi-role selection.
3. **User Dashboard:** Stats, active jobs overview.
4. **Create Job:** Multi-step form with map picker.
5. **My Jobs (User):** Management list.
6. **Job Details:** Applicant tracking.
7. **Worker Listing:** Search/Filter workers.
8. **Worker Dashboard:** Earnings, active tasks.
9. **Available Jobs (Worker):** Nearby job feed.
10. **My Work (Worker):** Task management.
11. **Chat:** Real-time communication.
12. **Profile Settings:** Unified settings.
