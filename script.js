
function changeFlag() {
    let country = document.getElementById("country").value;
    let flag = document.getElementById("flag");

    if (country === "IND") {
        flag.src = "https://flagcdn.com/w40/in.png";
    } 
    else if (country === "EN") {
        flag.src = "https://flagcdn.com/w40/gb.png";
    } 
    else if (country === "Pak") {
        flag.src = "https://flagcdn.com/w40/pk.png";
    } 
    else if (country === "Aus") {
        flag.src = "https://flagcdn.com/w40/au.png";
    }
}

function searchProduct() {
    let value = document.getElementById("searchBox").value;

    alert("You searched for: " + value);
}

// SIGN UP
function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");
    window.location.href = "login.html";
}


// LOGIN
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser === null) {
        alert("No user found. Please sign up first.");
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");
        window.location.href = "index.html"; // your main page
    } else {
        alert("Invalid email or password");
    }
}

function loadCheckout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    let summary = document.getElementById("orderSummary");

    cart.forEach(item => {
        total += item.price;
        summary.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    });

    document.getElementById("totalAmount").innerText = "Total: ₹" + total;
}

function placeOrder() {
    alert("Payment Successful ✅");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}

function goToCheckout() {
    window.location.href = "checkout.html";
}

function placeOrder() {
    let confirmPay = confirm("Do you want to pay?");

    if (confirmPay) {
        alert("Payment Successful 🎉");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    }
}

function loadOrders() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let div = document.getElementById("orders");

    orders.forEach(order => {
        div.innerHTML += `<p>${order.name} - ₹${order.price}</p>`;
    });
}