# 🍽️ MERN Stack Restaurant Reservation Application

A full-stack **MERN (MongoDB, Express, React, Node.js)** restaurant reservation application that allows users to book reservations through a modern UI with smooth scrolling navigation and real-time backend integration.

The project is fully deployed with:
- **Frontend** on Netlify
- **Backend** on Render
- **Database** on MongoDB Atlas

---

## Live Demo

- **Frontend:** https://mernrestaurantapplication.netlify.app  
- **Backend API:** https://mern-stack-project-restaurant-application.onrender.com  

---

## Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- React Scroll (smooth scrolling)
- Axios
- React Hot Toast
- CSS

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- CORS
- dotenv

### Deployment
- Netlify (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

##  Features

- Smooth scrolling navbar navigation
- Restaurant reservation form
- Form validation (frontend & backend)
- REST API integration
- Toast notifications on successful actions
- Redirect to success page after reservation
- Mobile-responsive UI
- Fully deployed and production-ready

---

## Project Structure

MERN_PROJECT/
│
├── frontend/
│ ├── src/
│ │ ├── Pages/
│ │ ├── components/
│ │ └── App.jsx
│ └── public/
│
├── backend/
│ ├── controller/
│ ├── models/
│ ├── routes/
│ └── app.js
│
└── README.md


---

##  API Endpoint

### Create Reservation


POST /api/v1/reservations/send


**Request Body**

json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phoneNumber": "9876543210",
  "date": "2025-01-01",
  "time": "19:00"
}

##Key Learnings

Handling CORS between different domains

Debugging production issues

Deploying MERN apps on Netlify and Render

Managing environment variables securely

MongoDB Atlas database management

Smooth scrolling with react-scroll

## Future Improvements

Admin dashboard for reservations

Email confirmation after booking

Authentication & authorization

Pagination and filtering

Loading indicators for better UX

## Author

Sakshi Kuthe
Frontend / MERN Stack Developer
