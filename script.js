const users = [
    { username: "user1", password: "pass1", role: "user" },
    { username: "doctor1", password: "pass2", role: "doctor" },
    { username: "lab1", password: "pass3", role: "lab" }
];

const medicalShops = [
  {
    name: "CityMed",
    location: "Bangalore",
    medicines: [
      { name: "Paracetamol", quantity: 25 },
      { name: "Ibuprofen", quantity: 15 }
    ]
  },
  {
    name: "HealthPlus",
    location: "Chennai",
    medicines: [
      { name: "Amoxicillin", quantity: 30 },
      { name: "Dolo 650", quantity: 20 }
    ]
  }
];

const doctors = [
    { name: "Dr. Smith", specialization: "Cardiologist", location: "Bangalore" },
    { name: "Dr. Ravi", specialization: "Dermatologist", location: "Chennai" }
];

const labs = [
    { name: "LabCorp", test: "Blood Test", location: "Bangalore" },
    { name: "ScanPlus", test: "MRI", location: "Chennai" }
];

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        showDashboard(user.role);
    } else {
        alert("Invalid credentials");
    }
}

function showDashboard(role) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("user-dashboard").style.display = "none";
    document.getElementById("doctor-dashboard").style.display = "none";
    document.getElementById("lab-dashboard").style.display = "none";

    if (role === "user") {
        document.getElementById("user-dashboard").style.display = "block";
    } else if (role === "doctor") {
        document.getElementById("doctor-dashboard").style.display = "block";
        loadDoctorAppointments();
    } else if (role === "lab") {
        document.getElementById("lab-dashboard").style.display = "block";
        loadLabAppointments();
    }
}

function filterShops() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const resultList = document.getElementById("resultList");

      // Clear previous results
      resultList.innerHTML = "";

      // Filter and display results
      const filtered = medicalShops.filter(shop => 
        shop.location.toLowerCase().includes(input)
      );

      filtered.forEach(shop => {
        const li = document.createElement("li");
        li.textContent = `${shop.name} - ${shop.location}`;
        resultList.appendChild(li);
      });

      if (filtered.length === 0 && input !== "") {
        const li = document.createElement("li");
        li.textContent = "No matching shops found.";
        resultList.appendChild(li);
      }
    }

function filterMedicine() {
      const input = document.getElementById("medicineInput").value.toLowerCase();
      const resultList = document.getElementById("medicineResult");
      resultList.innerHTML = "";

      const filtered = medicalShops.filter(shop =>
        shop.medicines.some(med =>
          med.name.toLowerCase().includes(input)
        )
      );

      filtered.forEach(shop => {
        const matchingMeds = shop.medicines.filter(med =>
          med.name.toLowerCase().includes(input)
        );

        const li = document.createElement("li");
        li.innerHTML = `<strong>${shop.name}</strong> - ${shop.location}<br>
          Medicines: ${matchingMeds.map(m => m.name + " (" + m.quantity + ")").join(", ")}`;
        resultList.appendChild(li);
      });

      if (filtered.length === 0 && input !== "") {
        const li = document.createElement("li");
        li.textContent = "No matching medicines found.";
        resultList.appendChild(li);
      }
    }

function searchDoctors() {
    const city = document.getElementById("city-doctor").value;
    const resultDiv = document.getElementById("doctor-results");
    resultDiv.innerHTML = "";
    doctors.filter(d => d.location === city).forEach(d => {
        resultDiv.innerHTML += `<p>${d.name} - ${d.specialization} 
        <button onclick="book('doctor', '${d.name}')">Book</button></p>`;
    });
}

function searchLabs() {
    const city = document.getElementById("city-lab").value;
    const resultDiv = document.getElementById("lab-results");
    resultDiv.innerHTML = "";
    labs.filter(l => l.location === city).forEach(l => {
        resultDiv.innerHTML += `<p>${l.name} - ${l.test} 
        <button onclick="book('lab', '${l.name}')">Book</button></p>`;
    });
}

function book(type, name) {
    const date = prompt("Enter appointment date (YYYY-MM-DD):");
    const time = prompt("Enter time (HH:MM):");
    const appointment = { type, name, date, time };
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    alert("Appointment booked with " + name + " on " + date + " at " + time);
}

function loadDoctorAppointments() {
     const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const doctorList = document.getElementById("doctor-list");
    doctorList.innerHTML = "";
    appointments
        .filter(a => a.type === "doctor" && a.name.toLowerCase().includes(currentUser.username.toLowerCase()))
        .forEach(app => {
            doctorList.innerHTML += `<li>${app.name} on ${app.date} at ${app.time}</li>`;
        });
}

function loadLabAppointments() {
     const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const labList = document.getElementById("lab-list");
    labList.innerHTML = "";
    appointments
        .filter(a => a.type === "lab" && a.name.toLowerCase().includes(currentUser.username.toLowerCase()))
        .forEach(app => {
            labList.innerHTML += `<li>${app.name} on ${app.date} at ${app.time}</li>`;
        });
}