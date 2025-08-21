# 🏡 StayersWorld – Airbnb Clone  

StayersWorld is a **feature-rich full-stack web application** inspired by **Airbnb**, built with **Node.js, Express.js, and MongoDB**.  
It enables users to explore, list, and rate properties while providing secure authentication, interactive maps, and a smooth user experience.  

---

## 🚀 Features  

- 🔐 **User Authentication** – Login, Logout, Profile management (Passport.js)  
- 🏠 **Listings Management** – Add, Edit, and Delete properties  
- ⭐ **Review System** – Add and Delete reviews for listings  
- 👤 **Account Management** – Update profile and reset password securely  
- 🛡️ **Data Security** – Password hashing & encryption   
- 📸 **Image Uploads** – Cloud-based image storage with Cloudinary

---

## 🛠️ Tech Stack & Packages  

**Core Technologies**  
- MongoDB + Mongoose (Database & Object Modeling)  
- Express.js (Backend framework)  
- Node.js (Runtime)  
- EJS (Template Rendering)  

**Authentication & Security**  
- Passport.js, Passport Local, Passport Local Mongoose  
- Express Session + Connect Mongo (Session handling)  
- Cookie Parser (Cookie management)  
- Joi (Data validation)  
- Dotenv (Environment variables)  

**Utilities & Integrations**  
- Cloudinary (Image storage)   
- Multer (File uploads)  
- Connect Flash (Flash messages)  

---

## 📂 Project Structure  

```bash
wanderlust/
│── models/         # MongoDB models (User, Listing, Review)
│── routes/         # Express routes
│── views/          # EJS templates (frontend pages)
│── public/         # Static files (CSS, JS, images)
│── app.js          # Main application entry point
│── package.json    # Dependencies and scripts
...
