
# FitSync Health Tracker

A full stack MERN Health Tracker application with authentication, MongoDB integration, and dynamic dashboard analytics.

---

## Features

* User Registration and Login
* JWT Authentication
* Protected Dashboard
* Add Health Data
* View Dynamic Health Statistics
* MongoDB Database Integration
* REST API Backend
* Responsive Dashboard UI

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js

### Database

* MongoDB Atlas
* Mongoose

---

## Project Structure

```bash
fitsync/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/PriyankaR1712/fitsync-health-tracker.git
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Create a `.env` file inside the server folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## API Endpoints

### Authentication APIs

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

---

### Health APIs

#### Add Health Data

```http
POST /api/health/add
```

#### Get Health Data

```http
GET /api/health
```

---

## Dashboard Features

* Calories Tracking
* Water Intake Tracking
* Step Counter
* Sleep Hours Tracking
* Dynamic Data Rendering

---

## Screenshots

Add project screenshots here:

* Register Page
* Login Page
* Dashboard
* MongoDB Collection
* Thunder Client API Testing

---

## Future Improvements

* Health Analytics Charts
* User-specific Data
* Mobile Responsiveness Enhancements
* Dark/Light Theme Toggle
* Daily Progress History

---

## Learning Outcomes

This project helped in understanding:

* MERN Stack Architecture
* REST API Development
* MongoDB Integration
* JWT Authentication
* Frontend and Backend Communication
* CRUD Operations
* React State Management

---

## Author

Priyanka R

GitHub: [https://github.com/PriyankaR1712](https://github.com/PriyankaR1712)

---

## License

This project is created for educational and learning purposes.
