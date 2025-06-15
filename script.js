const users = [
    { username: "user1", password: "pass1", role: "user" },
    { username: "doctor1", password: "pass2", role: "doctor" },
    { username: "lab1", password: "pass3", role: "lab" }
];
const medicalShops = [
  {
    name: "Vignesh Medicals",
    location : "CTS No. 1204, Maratha Colony, Dharwad",
    medicines: [
      { name : "Levocetirizine", quantity : 35 },
      { name: "Aspirin", quantity: 20 },
      { name: "ORS Sachets", quantity: 60 }
    ]
  },
  {
    name: "WellCare Pharmacy",
    location : "Basaveshwara Road, Near CBT, Dharwad",
    medicines : [
      { name : "Rantac", quantity : 45 },
      { name : "Vitamin C Tablets", quantity : 30 },
      { name: "Domperidone", quantity : 25 }
    ]
  },
  {
    name: "Sanjeevini Medical & General Stores",
    location : "Near SDM College, Kalabhavan Road, Dharwad",
    medicines: [
      { name: "Chlorpheniramine", quantity: 18 },
      { name: "Amoxiclav", quantity: 20 },
      { name: "Sinarest", quantity: 28 }
    ]
  },
  {
    name: "Dharwad Health Mart",
    location: "Rajendra Nagar, Hubli-Dharwad Bypass, Dharwad",
    medicines: [
      { name: "Glimepiride", quantity: 22 },
      { name: "Losartan", quantity: 16 },
      { name: "Becosules", quantity: 40 }
    ]
  },
  {
    name: "Shakti Pharma",
    location: "Opp. District Court, Malmaddi, Dharwad",
    medicines: [
      { name: "Azithral",quantity: 12 },
      { name: "Ciplox D Eye Drops", quantity: 10 },
      { name: "Vicks Inhaler",quantity: 50 }
    ]
  }
];

const doctors = [
    { name: "Dr. Asha Kulkarni", specialization: "Pediatrician", location: "Opp. District Court, Malmaddi, Dharwad" },
    { name: "Dr. Nitin Desai", specialization: "Orthopedic", location: "Near Civil Hospital, Line Bazaar, Dharwad" },
    { name: "Dr. Shilpa Patil", specialization: "Gynecologist", location: "KCD Circle, Vidyagiri, Dharwad" },
    { name: "Dr. Anand Joshi", specialization: "Neurologist", location: "Dadar West, Mumbai" },
    { name: "Dr. Veena Reddy", specialization: "ENT Specialist", location: "Beside KIMS Hospital, PB Road, Dharwad" },
    { name: "Dr. Rohit Shetty", specialization: "Dentist", location: "Gokul Road, Hubli" },
    { name: "Dr. Priya Nayak", specialization: "Cardiologist", location: "Station Road, Jubilee Circle, Dharwad" },
    { name: "Dr. Manjunath Hiremath", specialization: "Dermatologist", location: "Subhash Road, Near Bus Stand, Dharwad" }
];

const labs = [
    {
    name: "Thyrocare Diagnostic Lab",
    location: "Opp. Jubilee Circle, Dharwad",
    tests: [
      { name: "Thyroid Profile", cost: 400 },
      { name: "CBC", cost: 300 },
      { name: "Liver Function Test", cost: 600 }
    ]
  },
  {
    name: "Dr. Lal PathLabs",
    location: "Vidyagiri, Near SBI Bank, Dharwad",
    tests: [
      { name: "Blood Sugar Test", cost: 150 },
      { name: "HbA1c", cost: 350 },
      { name: "Lipid Profile", cost: 500 }
    ]
  },
  {
    name: "Aarthi Scans and Labs",
    location: "Kalabhavan Road, Dharwad",
    tests: [
      { name: "CT Scan", cost: 2200 },
      { name: "MRI Brain", cost: 4500 },
      { name: "X-Ray Chest", cost: 300 }
    ]
  },
  {
    name: "Shree Diagnostics",
    location: "Line Bazaar, Dharwad",
    tests: [
      { name: "Urine Test", cost: 100 },
      { name: "Vitamin D Test", cost: 800 },
      { name: "Iron Studies", cost: 450 }
    ]
  },
  {
    name: "Akshay Diagnostic Centre",
    location: "Near Jubilee Circle, Dharwad",
    tests: [
      { name: "Ultrasound Abdomen", cost: 900 },
      { name: "ECG", cost: 250 },
      { name: "TMT Test", cost: 1000 }
    ]
  },
  {
    name: "Sanjeevini Lab & Scan",
    location: "Near JSS College, Vidyagiri, Dharwad",
    tests: [
      { name: "Liver Function Test", cost: 600 },
      { name: "KFT", cost: 500 },
      { name: "Blood Grouping", cost: 100 }
    ]
  },
  {
    name: "Suresh Diagnostics",
    location: "Dajiban Peth, Dharwad",
    tests: [
      { name: "Urine Culture", cost: 300 },
      { name: "CBC", cost: 280 },
      { name: "Dengue Test", cost: 600 }
    ]
  },
  {
    name: "Navjeevan Lab",
    location: "Saptapur Main Road, Dharwad",
    tests: [
      { name: "Malaria Test", cost: 250 },
      { name: "Widal Test", cost: 200 },
      { name: "CRP Test", cost: 400 }
    ]
  },
  {
    name: "City Scans & Imaging",
    location: "Near SDM Hospital, Dharwad",
    tests: [
      { name: "MRI Spine", cost: 5500 },
      { name: "CT Chest", cost: 3000 },
      { name: "X-Ray Knee", cost: 350 }
    ]
  },
  {
    name: "Green Health Labs",
    location: "KCD Circle, Dharwad",
    tests: [
      { name: "Complete Health Checkup", cost: 2500 },
      { name: "Diabetic Package", cost: 1800 },
      { name: "Fever Panel", cost: 900 }
    ]
  }
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
    document.getElementById("role").textContent = role.charAt(0).toUpperCase() + role.slice(1);
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
      resultList.innerHTML = "";
      if (input === "") return;

      const filtered = medicalShops.filter(shop => 
        shop.location.toLowerCase().includes(input)
      );

      filtered.forEach(shop => {
        const li = document.createElement("li");
        li.innerHTML  = `<strong>${shop.name} </strong> - ${shop.location}`;
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
      if (input === "") return;
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
        li.innerHTML = `<p><strong>${shop.name}</strong> - ${shop.location}<br>
          Medicines: ${matchingMeds.map(m => m.name + " (" + m.quantity + ")").join(", ")}</p>`;
        resultList.appendChild(li);
      });

      if (filtered.length === 0 && input !== "") {
        const li = document.createElement("li");
        li.textContent = "No matching medicines found.";
        resultList.appendChild(li);
      }
    }

function searchDoctors() {
    const specialization = document.getElementById("specializationInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("doctor-results");
    resultDiv.innerHTML = "";
    if (specialization  === "") return;

    const matchedDoctors = doctors.filter(d => d.specialization.toLowerCase().includes(specialization));

    if (matchedDoctors.length === 0 && specialization !== "") {
        resultDiv.innerHTML = "<p>No doctors found.</p>";
    }

    matchedDoctors.forEach(d => {
        resultDiv.innerHTML += `<p><strong>${d.name}</strong> - ${d.specialization} <br> Location:${d.location}<br>
        <button onclick="book('doctor', '${d.name}')">Book</button></p>`;
    });
}

function filterLabs() {
      const input = document.getElementById("labSearchInput").value.toLowerCase();
      const resultList = document.getElementById("labResultList");
      resultList.innerHTML = "";
      if (input === "") return;

      const filtered = labs.filter(lab =>
        lab.location.toLowerCase().includes(input)
      );

      filtered.forEach(lab => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${lab.name}</strong><br>${lab.location}`;
        resultList.appendChild(li);
      });

      if (filtered.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No matching labs found.";
        resultList.appendChild(li);
      }
    }

    function filterTests() {
      const input = document.getElementById("testSearchInput").value.toLowerCase();
      const resultList = document.getElementById("testResultList");
      resultList.innerHTML = "";
      if (input === "") return;

      const filtered = labs.filter(lab =>
        lab.tests.some(test =>
          test.name.toLowerCase().includes(input)
        )
      );

      filtered.forEach(lab => {
        const matchingTests = lab.tests.filter(test =>
          test.name.toLowerCase().includes(input)
        );

        const li = document.createElement("li");
        li.innerHTML = `<strong>${lab.name}</strong> - ${lab.location}<br>
          Tests: ${matchingTests.map(t => `${t.name} (₹${t.cost})`).join(", ")}`;
        resultList.appendChild(li);
      });

      if (filtered.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No matching tests found.";
        resultList.appendChild(li);
      }
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