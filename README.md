Vehicle Vista Backend
=====================


This repository contains the backend code for the Vehicle Vista full-stack application. It is built using the Express.js framework and MongoDB database, and provides REST APIs for CRUD operations on vehicle listings, as well as user authentication with Google.

Table of Contents
-----------------

* * * * *

-   Getting Started
-   Features
-   API Endpoints
-   Authentication
-   Database
-   Contributing
-   License

Getting Started
---------------

* * * * *

To get started with the Vehicle Vista Backend, follow these steps:

1.  Clone the repository: `git clone https://github.com/your-username/vehicle-vista-backend.git`
2.  Install dependencies: `npm install`
3.  Start the server: `npm start`
4.  Open a web browser and navigate to `http://localhost:3000` to access the API endpoints

Features
--------

* * * * *

-   CRUD operations on vehicle listings
-   User authentication with Google
-   REST APIs for easy integration with frontend applications

API Endpoints
-------------

* * * * *

The following API endpoints are available:

### Vehicle Listings

-   `GET /vehicles`: Retrieve a list of all vehicle listings
-   `GET /vehicles/:id`: Retrieve a single vehicle listing by ID
-   `POST /vehicles`: Create a new vehicle listing
-   `PUT /vehicles/:id`: Update a vehicle listing
-   `DELETE /vehicles/:id`: Delete a vehicle listing

### User Authentication

-   `GET /auth/google`: Redirect to Google authentication page
-   `GET /auth/google/callback`: Handle Google authentication callback
-   `GET /auth/me`: Retrieve the currently authenticated user's profile
