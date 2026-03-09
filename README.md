# SmartMed – Healthcare Service Platform (Academic Prototype)

SmartMed is a web-based healthcare service prototype that allows users to search for doctors, diagnostic labs, and pharmacies from a single platform. Users can check medicine availability, search healthcare providers, and book appointments through a simple web interface.

This project was developed as an **academic prototype** to demonstrate the interaction between patients, doctors, laboratories, and pharmacies. The current version runs entirely in the browser without any backend server.

Future versions may expand into a **complete healthcare platform with mobile applications, secure authentication, and cloud database integration.**

---

# Features

## Role-Based Login
The system supports four types of users:

- User
- Doctor
- Lab
- Pharmacy

Each role has its own dashboard with specific functionalities.

---

# User Functionalities

### Medicine & Pharmacy Search
Users can:
- Search pharmacies by location
- Search medicines by name
- View available medicines and stock quantities

### Doctor Search
Users can:
- Search doctors by specialization
- View doctor details and location
- Book appointments with selected date and time

### Lab & Diagnostic Tests
Users can:
- Search diagnostic labs by location
- Search medical tests
- Book lab appointments

---

# Doctor Dashboard

Doctors can:
- View appointments booked by users
- Mark completed appointments and remove them from the list

---

# Lab Dashboard

Labs can:
- View diagnostic test bookings
- Remove completed bookings

---

# Pharmacy Dashboard

Pharmacies can manage their medicine inventory by:

- Updating medicine quantities
- Adding new medicines
- Removing medicines from stock

---

# Registration

New users can register as:

- User
- Doctor
- Lab
- Pharmacy

Additional information is required depending on the role, such as:

- Doctor specialization
- Lab tests offered
- Pharmacy medicine inventory

---

# Technologies Used

- HTML
- CSS
- JavaScript
- Browser LocalStorage (for storing data)

The project currently runs completely on the frontend without a backend server.

---

# Project Structure

```
SmartMed
│
├── index.html      # Main application interface
├── style.css       # UI styling
└── script.js       # Application logic
```

---

# Demo Login Credentials

Use the following accounts to test the application:

### User
Username: user1  
Password: upass1  

### Doctor
Username: doctor1  
Password: dpass1  

### Lab
Username: lab1  
Password: lpass1  

### Pharmacy
Username: pharmacy1  
Password: ppass1  

---

# How to Run the Project

1. Download or clone the repository

```
git clone https://github.com/yourusername/smartmed.git
```

2. Open the project folder.

3. Open the following file in any web browser:

```
index.html
```

No server setup is required.

---

# Current Limitations

This project is an academic prototype and has the following limitations:

- No backend server
- No secure authentication
- No real database
- Data stored only in browser LocalStorage
- Limited sample dataset

---

# Future Improvements

Planned improvements include:

- Android mobile application
- Cloud database integration
- Secure authentication system
- Online medicine ordering and payment system
- Location-based service integration
- Online consultation system
- Admin dashboard

---

# Project Status

This project is **partially completed** and currently serves as a **prototype for academic demonstration purposes.** Further development is planned to expand the platform into a full healthcare service system.

---
