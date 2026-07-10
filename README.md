# Full-Stack Personal Portfolio

A modern, responsive, full-stack personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). It features a dynamic project gallery, a working contact form, and a custom content management API for easy updates.

## Features

- **Dynamic Project Gallery:** Projects are loaded from a MongoDB database rather than hardcoded.
- **Admin Dashboard (API):** Full CRUD capabilities (Create, Read, Update, Delete) to easily manage projects.
- **Secure Contact Form:** Inquiries are validated and safely stored in the database.
- **Modern UI/UX:** Built with a custom "Beige & Olive" color palette, featuring glassmorphism elements and full mobile responsiveness.
- **Downloadable CV:** Easy, one-click resume download for recruiters.

## Tech Stack

- **Frontend:** React.js, Vite, Vanilla CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose ORM
- **Deployment:** AWS S3 (Frontend), AWS Elastic Beanstalk (Backend), MongoDB Atlas (Database)

## Prerequisites

Before running this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account (or a local MongoDB server)

## Environment Variables

You will need to create a `.env` file in your `server` directory with the following variables:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

For the frontend, the API URL is handled via Vite environment variables or defaults to `http://localhost:5001/api`.

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-project.git
cd portfolio-project
```

### 2. Backend Setup
```bash
cd server
npm install
npm run server
```
*The backend server should now be running on `http://localhost:5001`*

### 3. Frontend Setup
Open a new terminal window:
```bash
# Make sure you are in the root portfolio-project directory
npm install
npm run dev
```
*The frontend React app should now be running on `http://localhost:5173`*

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Messages
- `POST /api/messages` - Submit a new contact message
- `GET /api/messages` - Retrieve all messages

## Deployment

To build the frontend for production deployment (e.g., AWS S3):
```bash
npm run build
```
This will generate a `dist` folder containing the optimized, production-ready static files.
