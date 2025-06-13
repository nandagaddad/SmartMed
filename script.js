const users = [
    { username: "user1", password: "pass1", role: "user" },
    { username: "doctor1", password: "pass2", role: "doctor" },
    { username: "lab1", password: "pass3", role: "lab" }
];

const medicines = [
    { name: "Paracetamol", pharmacy: "City Medics", location: "Bangalore" },
    { name: "Amoxicillin", pharmacy: "HealthPlus", location: "Chennai" }
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
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("role").innerText = role;
}

function searchMedicine() {
    const city = document.getElementById("city-medicine").value;
    const resultDiv = document.getElementById("medicine-results");
    resultDiv.innerHTML = "";
    medicines.filter(m => m.location === city).forEach(m => {
        resultDiv.innerHTML += `<p>${m.name} - ${m.pharmacy}</p>`;
    });
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
