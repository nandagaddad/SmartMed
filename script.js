const users = [
    { username: "user1", password: "upass1", role: "user" },
    { username: "user2", password: "upass2", role: "user" },

    { username: "doctor1", password: "dpass1", role: "doctor" },
    { username: "doctor2", password: "dpass2", role: "doctor" },
    { username: "doctor3", password: "dpass3", role: "doctor" },
    { username: "doctor4", password: "dpass4", role: "doctor" },
    { username: "doctor5", password: "dpass5", role: "doctor" },
    { username: "doctor6", password: "dpass6", role: "doctor" },
    { username: "doctor7", password: "dpass7", role: "doctor" },
    { username: "doctor8", password: "dpass8", role: "doctor" },

    { username: "lab1", password: "lpass1", role: "lab" },
    { username: "lab2", password: "lpass2", role: "lab" },
    { username: "lab3", password: "lpass3", role: "lab" },
    { username: "lab4", password: "lpass4", role: "lab" },
    { username: "lab5", password: "lpass5", role: "lab" },
    { username: "lab6", password: "lpass6", role: "lab" },
    { username: "lab7", password: "lpass7", role: "lab" },
    { username: "lab8", password: "lpass8", role: "lab" },
    { username: "lab9", password: "lpass9", role: "lab" },
    { username: "lab10", password: "lpass10", role: "lab" },

    { username: "pharmacy1", password: "ppass1", role: "pharmacy" },
    { username: "pharmacy2", password: "ppass2", role: "pharmacy" },
    { username: "pharmacy3", password: "ppass3", role: "pharmacy" },
    { username: "pharmacy4", password: "ppass4", role: "pharmacy" },
    { username: "pharmacy5", password: "ppass5", role: "pharmacy" }
];
let medicalShops = JSON.parse(localStorage.getItem("medicalShops")) || [
  {
    name: "Vignesh Medicals",
    location : "CTS No. 1204, Maratha Colony, Dharwad",
    username: "pharmacy1",
    medicines: [
      { name : "Levocetirizine", quantity : 35 },
      { name: "Aspirin", quantity: 20 },
      { name: "ORS Sachets", quantity: 60 }
    ]
  },
  {
    name: "WellCare Pharmacy",
    location : "Basaveshwara Road, Near CBT, Dharwad",
    username: "pharmacy2",
    medicines : [
      { name : "Rantac", quantity : 45 },
      { name : "Vitamin C Tablets", quantity : 30 },
      { name: "Domperidone", quantity : 25 }
    ]
  },
  {
    name: "Sanjeevini Medical & General Stores",
    location : "Near SDM College, Kalabhavan Road, Dharwad",
    username: "pharmacy3",
    medicines: [
      { name: "Chlorpheniramine", quantity: 18 },
      { name: "Amoxiclav", quantity: 20 },
      { name: "Sinarest", quantity: 28 }
    ]
  },
  {
    name: "Dharwad Health Mart",
    location: "Rajendra Nagar, Hubli-Dharwad Bypass, Dharwad",
    username: "pharmacy4",
    medicines: [
      { name: "Glimepiride", quantity: 22 },
      { name: "Losartan", quantity: 16 },
      { name: "Becosules", quantity: 40 }
    ]
  },
  {
    name: "Shakti Pharma",
    location: "Opp. District Court, Malmaddi, Dharwad",
    username: "pharmacy5",
    medicines: [
      { name: "Azithral",quantity: 12 },
      { name: "Ciplox D Eye Drops", quantity: 10 },
      { name: "Vicks Inhaler",quantity: 50 }
    ]
  }
];

const doctors = [
    { name: "Dr. Asha Kulkarni", specialization: "Pediatrician", location: "Opp. District Court, Malmaddi, Dharwad", username : "doctor1" },
    { name: "Dr. Nitin Desai", specialization: "Orthopedic", location: "Near Civil Hospital, Line Bazaar, Dharwad", username : "doctor2" },
    { name: "Dr. Shilpa Patil", specialization: "Gynecologist", location: "KCD Circle, Vidyagiri, Dharwad" , username : "doctor3"},
    { name: "Dr. Anand Joshi", specialization: "Neurologist", location: "Dadar West, Mumbai", username : "doctor4" },
    { name: "Dr. Veena Reddy", specialization: "ENT Specialist", location: "Beside KIMS Hospital, PB Road, Dharwad", username : "doctor5" },
    { name: "Dr. Rohit Shetty", specialization: "Dentist", location: "Gokul Road, Hubli", username : "doctor6" },
    { name: "Dr. Priya Nayak", specialization: "Cardiologist", location: "Station Road, Jubilee Circle, Dharwad", username : "doctor7" },
    { name: "Dr. Manjunath Hiremath", specialization: "Dermatologist", location: "Subhash Road, Near Bus Stand, Dharwad", username : "doctor8" }
];

const labs = [
    {
    name: "Thyrocare Diagnostic Lab",
    location: "Opp. Jubilee Circle, Dharwad",
    tests: [
      { name: "Thyroid Profile", cost: 400 },
      { name: "CBC", cost: 300 },
      { name: "Liver Function Test", cost: 600 }
    ],
    username: "lab1"
  },
  {
    name: "Dr. Lal PathLabs",
    location: "Vidyagiri, Near SBI Bank, Dharwad",
    tests: [
      { name: "Blood Sugar Test", cost: 150 },
      { name: "HbA1c", cost: 350 },
      { name: "Lipid Profile", cost: 500 }
    ],username: "lab2"
  },
  {
    name: "Aarthi Scans and Labs",
    location: "Kalabhavan Road, Dharwad",
    tests: [
      { name: "CT Scan", cost: 2200 },
      { name: "MRI Brain", cost: 4500 },
      { name: "X-Ray Chest", cost: 300 }
    ], username: "lab3"
  },
  {
    name: "Shree Diagnostics",
    location: "Line Bazaar, Dharwad",
    tests: [
      { name: "Urine Test", cost: 100 },
      { name: "Vitamin D Test", cost: 800 },
      { name: "Iron Studies", cost: 450 }
    ], username: "lab4"
  },
  {
    name: "Akshay Diagnostic Centre",
    location: "Near Jubilee Circle, Dharwad",
    tests: [
      { name: "Ultrasound Abdomen", cost: 900 },
      { name: "ECG", cost: 250 },
      { name: "TMT Test", cost: 1000 }
    ], username: "lab5"
  },
  {
    name: "Sanjeevini Lab & Scan",
    location: "Near JSS College, Vidyagiri, Dharwad",
    tests: [
      { name: "Liver Function Test", cost: 600 },
      { name: "KFT", cost: 500 },
      { name: "Blood Grouping", cost: 100 }
    ], username: "lab6"
  },
  {
    name: "Suresh Diagnostics",
    location: "Dajiban Peth, Dharwad",
    tests: [
      { name: "Urine Culture", cost: 300 },
      { name: "CBC", cost: 280 },
      { name: "Dengue Test", cost: 600 }
    ], username: "lab7"
  },
  {
    name: "Navjeevan Lab",
    location: "Saptapur Main Road, Dharwad",
    tests: [
      { name: "Malaria Test", cost: 250 },
      { name: "Widal Test", cost: 200 },
      { name: "CRP Test", cost: 400 }
    ], username: "lab8"
  },
  {
    name: "City Scans & Imaging",
    location: "Near SDM Hospital, Dharwad",
    tests: [
      { name: "MRI Spine", cost: 5500 },
      { name: "CT Chest", cost: 3000 },
      { name: "X-Ray Knee", cost: 350 }
    ], username: "lab9"
  },
  {
    name: "Green Health Labs",
    location: "KCD Circle, Dharwad",
    tests: [
      { name: "Complete Health Checkup", cost: 2500 },
      { name: "Diabetic Package", cost: 1800 },
      { name: "Fever Panel", cost: 900 }
    ], username: "lab10"
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
    console.log("Entered:", username, password);
console.log("Available users:", users);

}

function showDashboard(role) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("registration-section").style.display = "none";
    document.getElementById("user-dashboard").style.display = "none";
    document.getElementById("doctor-dashboard").style.display = "none";
    document.getElementById("lab-dashboard").style.display = "none";
    document.getElementById("pharmacy-dashboard").style.display = "none"; 
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    let displayName = user.username;
        if (role === "doctor") {
        const doc = doctors.find(d => d.username === user.username);
        if (doc) displayName = doc.name;
    } else if (role === "lab") {
        const lab = labs.find(l => l.username === user.username);
        if (lab) displayName = lab.name;
    } else if (role === "pharmacy") {
        const shop = medicalShops.find(s => s.username === user.username);
        if (shop) displayName = shop.name;
    }
    document.querySelectorAll("#display-name").forEach(el => el.textContent = displayName);
    //document.getElementById("role").textContent = role.charAt(0).toUpperCase() + role.slice(1);
    if (role === "user") {
        document.getElementById("user-dashboard").style.display = "block";
    } else if (role === "doctor") {
        document.getElementById("doctor-dashboard").style.display = "block";
        loadDoctorAppointments();
    } else if (role === "lab") {
        document.getElementById("lab-dashboard").style.display = "block";
        loadLabAppointments();
    }
    else if (role === "pharmacy") {
    document.getElementById("pharmacy-dashboard").style.display = "block";
    loadPharmacyStock();
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
        li.innerHTML = `<strong>${lab.name}</strong><br>${lab.location}<br>
            <button onclick="book('lab', '${lab.name}')">Book</button>`;
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
        li.innerHTML = `
            <strong>${lab.name}</strong> - ${lab.location}<br>
            Tests: ${matchingTests.map(t => `${t.name} (₹${t.cost})`).join(", ")}<br>
            <button onclick="book('lab', '${lab.name}')">Book</button>`;
        resultList.appendChild(li);
    });

      if (filtered.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No matching tests found.";
        resultList.appendChild(li);
      }
    }
/*
function book(type, name) {
    const date = prompt("Enter appointment date (YYYY-MM-DD):");
    const time = prompt("Enter time (HH:MM):");
   let assignedUsername = null;

    if (type === "doctor") {
        const doctor = doctors.find(d => d.name === name);
        //const doctorUser = users.find(u => u.role === "doctor" && name.toLowerCase().includes(u.username.toLowerCase()));
        assignedUsername = doctor ? doctor.username : null;
    }

    if (type === "lab") {
       const lab = labs.find(l => l.name === name);
        assignedUsername = lab ? lab.username : null;
    }

    const appointment = { type, name, username: assignedUsername, date, time };
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    alert("Appointment booked with " + name + " on " + date + " at " + time);
    console.log("Booked:", appointment);
}*/
let currentBooking = null;

function book(type, name) {
    currentBooking = { type, name };
    document.getElementById("appointment-date").value = "";
    document.getElementById("appointment-time").value = "";
    document.getElementById("booking-popup").style.display = "block";
}
function cancelBooking() {
    document.getElementById("booking-popup").style.display = "none";
    currentBooking = null;
}

function confirmBooking() {
    const dateInput = document.getElementById("appointment-date").value;
    const timeInput = document.getElementById("appointment-time").value;

    if (!dateInput || !timeInput) {
        alert("Please enter both date and time.");
        return;
    }

    const appointmentDateTime = new Date(`${dateInput}T${timeInput}`);
    const now = new Date();

    if (appointmentDateTime <= now) {
        alert("Please select a future date and time.");
        return;
    }

    let assignedUsername = null;

    if (currentBooking.type === "doctor") {
        const doctor = doctors.find(d => d.name === currentBooking.name);
        assignedUsername = doctor ? doctor.username : null;
    } else if (currentBooking.type === "lab") {
        const lab = labs.find(l => l.name === currentBooking.name);
        assignedUsername = lab ? lab.username : null;
    }

    const appointment = {
        type: currentBooking.type,
        name: currentBooking.name,
        username: assignedUsername,
        date: dateInput,
        time: timeInput
    };

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment booked successfully!");

    document.getElementById("booking-popup").style.display = "none";
    currentBooking = null;
}


function loadDoctorAppointments() {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const doctorList = document.getElementById("doctor-list");
    doctorList.innerHTML = "";
    appointments.forEach((app, i) => {
        if (app.type === "doctor" && app.username === currentUser.username) {
            const id = `appt-${i}`;
            doctorList.innerHTML += `
                <li>
                    <input type="checkbox" id="${id}" data-index="${i}">
                    <label for="${id}">${app.name} on ${app.date} at ${app.time}</label>
                </li>`;
        }
    });
    console.log("Logged in as:", currentUser.username);
    console.log("Stored appointments:", appointments);
}

function loadLabAppointments() {
     const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const labList = document.getElementById("lab-list");
    labList.innerHTML = "";
    appointments.forEach((app, i) => {
        if (app.type === "lab" && app.username === currentUser.username) {
            const id = `labappt-${i}`;
            labList.innerHTML += `
                <li>
                    <input type="checkbox" id="${id}" data-index="${i}">
                    <label for="${id}">${app.name} on ${app.date} at ${app.time}</label>
                </li>`;
        }
    });

    console.log("Lab Logged in as:", currentUser.username);
    console.log("Lab Appointments:", appointments);
}

function updateAppointments() {
    const checkboxes = document.querySelectorAll('#doctor-list input[type="checkbox"]');
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const updatedAppointments = appointments.filter((appt, index) => {
        const isMine = appt.type === "doctor" && appt.username === currentUser.username;
        const isChecked = [...checkboxes].some(cb => cb.dataset.index == index && cb.checked);
        return !(isMine && isChecked); // Keep all except checked ones
    });
        if (updatedAppointments.length === 0) {
        localStorage.removeItem("appointments");
    } else {
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    }
    //localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    alert("Selected appointments removed.");
    loadDoctorAppointments(); // Refresh list
}

function updateLabAppointments() {
    const checkboxes = document.querySelectorAll('#lab-list input[type="checkbox"]');
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const updatedAppointments = appointments.filter((appt, index) => {
        const isMine = appt.type === "lab" && appt.username === currentUser.username;
        const isChecked = [...checkboxes].some(cb => cb.dataset.index == index && cb.checked);
        return !(isMine && isChecked); // Remove if it's lab's own and is checked
    });
        if (updatedAppointments.length === 0) {
        localStorage.removeItem("appointments");
    } else {
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    }
    //localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    alert("Selected lab appointments removed.");
    loadLabAppointments(); // Refresh lab list
}

function loadPharmacyStock() {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
     const medicalShopsData = JSON.parse(localStorage.getItem("medicalShops")) || medicalShops;
    const shop = medicalShops.find(s => s.username === currentUser.username);
    const stockList = document.getElementById("pharmacy-stock-list");
    stockList.innerHTML = "";

    if (!shop) {
        stockList.innerHTML = "<li>No stock found for this pharmacy.</li>";
        return;
    }

    shop.medicines.forEach((med, index) => {
        stockList.innerHTML += `
            <li>
                ${med.name}:
                <input type="number" id="stock-${index}" value="${med.quantity}" min="0">
                <button type="button" onclick="removeMedicine(${index})">Remove</button>
            </li>`;
    });
        stockList.innerHTML += `
        <li>
            <input type="text" id="new-med-name" placeholder="Medicine Name">
            <input type="number" id="new-med-qty" placeholder="Quantity" min="1">
            <button type="button" onclick="addNewMedicine()">Add</button>
        </li>`;
  console.log("Current user:", currentUser.username);
console.log("Shop found:", shop);

}

function updatePharmacyStock() {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    let medicalShopsData = JSON.parse(localStorage.getItem("medicalShops")) || medicalShops;
    const shop = medicalShops.find(s => s.username === currentUser.username);
    if (!shop) return;

    shop.medicines.forEach((med, index) => {
        const qty = parseInt(document.getElementById(`stock-${index}`).value);
        if (!isNaN(qty)) {
            med.quantity = qty;
        }
    });
    localStorage.setItem("medicalShops", JSON.stringify(medicalShopsData));
    alert("Stock updated successfully!");
    loadPharmacyStock();
}

function addNewMedicine() {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const shop = medicalShops.find(s => s.username === currentUser.username);

    const name = document.getElementById("new-med-name").value.trim();
    const quantity = parseInt(document.getElementById("new-med-qty").value.trim());

    if (!name || isNaN(quantity) || quantity <= 0) {
        alert("Enter valid medicine name and quantity.");
        return;
    }

    shop.medicines.push({ name,quantity: quantity });
    alert("Medicine added successfully!");
    loadPharmacyStock();
}

function removeMedicine(index) {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const shop = medicalShops.find(s => s.username === currentUser.username);
    shop.medicines.splice(index, 1);
    loadPharmacyStock();
}

function renderRegistrationFields() {
    const role = document.getElementById("reg-role").value;
    const container = document.getElementById("registration-fields");

    container.innerHTML = "";

    if (!role) return;

    // Common fields
    container.innerHTML += '<input type="text" id="reg-username" placeholder="Username">';
    container.innerHTML += '<input type="password" id="reg-password" placeholder="Password">';

    if (role === "doctor") {
        container.innerHTML += '<input type="text" id="reg-name" placeholder="Doctor Name">';
        container.innerHTML += '<input type="text" id="reg-specialization" placeholder="Specialization">';
        container.innerHTML += '<input type="text" id="reg-location" placeholder="Location">';
    } else if (role === "lab") {
        container.innerHTML += '<input type="text" id="reg-name" placeholder="Lab Name">';
        container.innerHTML += '<input type="text" id="reg-location" placeholder="Location">';
        container.innerHTML += '<textarea id="reg-tests" placeholder="Enter test name and cost (e.g. CBC:300, LFT:600)"></textarea>';
    } else if (role === "pharmacy") {
        container.innerHTML += '<input type="text" id="reg-name" placeholder="Pharmacy Name">';
        container.innerHTML += '<input type="text" id="reg-location" placeholder="Location">';
        container.innerHTML += '<textarea id="reg-medicines" placeholder="Enter medicine name and quantity (e.g. Crocin:20, Dolo:15)"></textarea>';
    }
}

function register() {
    const role = document.getElementById("reg-role").value;
    const username = document.getElementById("reg-username")?.value.trim();
    const password = document.getElementById("reg-password")?.value.trim();

    if (!role || !username || !password) {
        alert("Username, password and role are required.");
        return;
    }

    // Check if user exists
    if (users.find(u => u.username === username)) {
        alert("Username already exists.");
        return;
    }

    users.push({ username, password, role });

    if (role === "doctor") {
        const name = document.getElementById("reg-name").value.trim();
        const specialization = document.getElementById("reg-specialization").value.trim();
        const location = document.getElementById("reg-location").value.trim();
        if (!name || !specialization || !location) {
            alert("All doctor details are required.");
            return;
        }
        doctors.push({ name, specialization, location, username });

    } else if (role === "lab") {
        const name = document.getElementById("reg-name").value.trim();
        const location = document.getElementById("reg-location").value.trim();
        const testStr = document.getElementById("reg-tests").value.trim();

        if (!name || !location || !testStr) {
            alert("All lab details are required.");
            return;
        }

        const tests = testStr.split(",").map(item => {
            const [name, cost] = item.split(":").map(s => s.trim());
            return { name, cost: parseFloat(cost) };
        });

        if (tests.some(t => !t.name || isNaN(t.cost))) {
            alert("Invalid test format.");
            return;
        }

        labs.push({ name, location, tests });

    } else if (role === "pharmacy") {
        const name = document.getElementById("reg-name").value.trim();
        const location = document.getElementById("reg-location").value.trim();
        const medStr = document.getElementById("reg-medicines").value.trim();

        if (!name || !location || !medStr) {
            alert("All pharmacy details are required.");
            return;
        }

        const medicines = medStr.split(",").map(item => {
            const [name, quantity] = item.split(":").map(s => s.trim());
            return { name, quantity: parseInt(quantity) };
        });

        if (medicines.some(m => !m.name || isNaN(m.quantity))) {
            alert("Invalid medicine format.");
            return;
        }

        medicalShops.push({ name, location, medicines });
    }

    alert("Registration successful!");
    document.getElementById("registration-fields").innerHTML = "";
    document.getElementById("reg-role").value = "";
}
