# MEAN CRUD Application

A simple CRUD web application built using the MEAN Stack (MongoDB, Express.js, Angular, and Node.js).

This project demonstrates the basics of creating, reading, updating, and deleting data using a full-stack JavaScript application.

---

# Features

* Create new items
* Read and display data
* Update existing items
* Delete items
* REST API integration
* Angular frontend
* MongoDB database connection
* Responsive and clean structure

---

# Tech Stack

* MongoDB
* Express.js
* Angular
* Node.js

---

# Project Structure

```bash
project/
│
├── backend/
├── frontend/
├── demo/
└── README.md
```

---

# Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```bash
http://localhost:3000
```

Environment Variables:

* `MONGODB_URI`

Default:

```bash
mongodb://127.0.0.1:27017/mean_crud_app
```

* `PORT`

Default:

```bash
3000
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```bash
http://localhost:4200
```

---

# API Endpoints

## Get All Items

```bash
GET /api/items
```

## Create Item

```bash
POST /api/items
```

## Update Item

```bash
PUT /api/items/:id
```

## Delete Item

```bash
DELETE /api/items/:id
```

---

# Screenshot

Add your project screenshots inside:

```bash
assets/screenshots/
```

Example:

```md
![Application Screenshot](assets/screenshots/app.png)
```

---

# Demo Video

A demo video explaining the project functionality is included inside the following folder:

```bash
demo/
```

Please extract the compressed file first before watching the video.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/benamintoskii/MEAN-CRUD-APP.git
```

Install dependencies:

```bash
cd backend
npm install

cd ../frontend
npm install
```

---

# Author

Abdelrahman Amin

GitHub:
https://github.com/benamintoskii
