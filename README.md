# Find Your Destination  

**Author:** Saqib Aqeel 
**Purpose:** Internship Assignment  
**Submission Date:** 25/12/24  

---

## Project Overview  

**Find Your Destination** is a web-based platform designed to help users explore and share travel destinations tailored to their preferences. Users can find their  destinations by budget, location, and adventure type while also contributing their own recommendations for others to discover. The project demonstrates robust backend functionality, dynamic frontend rendering, and responsive design.  

This project is built as part of my internship application to showcase my skills in web development.

---

## Features  

1. **Destination Discovery**:  
   - Explore destinations based on filters like budget, location, and activity type.  

2. **User Authentication**:  
   - Secure registration, login, and logout functionalities powered by **Passport.js**.  

3. **User Contributions**:  
   - Users can post details about their favorite destinations, complete with descriptions and images.  

4. **Dynamic Search and Filtering**:  
   - Search for destinations based on user-defined criteria to find tailored results.  

5. **Responsive Design**:  
   - Ensures compatibility across desktop and mobile devices with **Bootstrap**.  

6. **Session and Flash Messaging**:  
   - Provides user-friendly feedback on actions like login success or input errors using **Connect-Flash**.  

7. **Error Handling**:  
   - Custom error pages for undefined routes or application errors.  

---

## Technologies Used  

### Backend  
- **Node.js**: Server-side JavaScript runtime.  
- **Express.js**: Web framework for creating robust APIs and middleware.  
- **MongoDB**: NoSQL database for storing user and destination data.  

### Frontend  
- **Bootstrap**: Framework for responsive and mobile-first design.  
- **EJS (Embedded JavaScript)**: Template engine for dynamic page rendering.  
- **HTML/CSS**: For structuring and styling web pages.  

### Authentication and Session Management  
- **Passport.js**: Handles user authentication securely.  
- **Express-Session**: Manages user sessions efficiently.  

### Utility Libraries  
- **Mongoose**: Simplifies interactions with MongoDB.  
- **Connect-Flash**: Enables temporary storage of success or error messages for user feedback.  

---

## Project Structure  

```plaintext
FindYourDestination/
├── models/
│   └── userModel.js       # Schema and model for user authentication
├── routes/
│   └── destinationRoutes.js  # Routes for handling destination-related functionality
├── utility/
│   ├── wrapAsync.js       # Utility function for async error handling
│   └── expressError.js    # Custom error class for handling exceptions
├── views/
│   ├── error.ejs          # Template for displaying error messages
│   ├── home.ejs           # Home page for the application
│   ├── login.ejs          # Login page
│   ├── signUp.ejs         # Sign-up page
│   └── destination.ejs    # Page for displaying and creating destinations
├── public/
│   ├── css/               # Custom CSS styles and Bootstrap assets
│   └── js/                #  and JS scripts
├── index.js                 # Main application file (entry point)
├── package.json           # Node.js project metadata and dependencies
├── README.md              # Project documentation
└── .gitignore             # Files and folders to ignore in version control
