function showLogin(){
    document.getElementById("login-page").style.display = "flex";
    document.getElementById("register-page").style.display = "none";
    document.getElementById("dashboard-page").style.display = "none";
}

function showRegister(){
    document.getElementById("register-page").style.display = "flex";
    document.getElementById("login-page").style.display = "none";
    document.getElementById("dashboard-page").style.display = "none";
}

function showDashboard(){
    document.getElementById("dashboard-page").style.display = "flex";
    document.getElementById("login-page").style.display = "none";
    document.getElementById("register-page").style.display = "none";
}




// ---------- REGISTER BUTTON ----------
document.getElementById("register-btn").addEventListener("click", function(){
   
    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;
    let email = document.getElementById("reg-email").value;
      if(!username || !password){
        alert("Please fill in all fields")
        return;
    }

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify({username, email, password}));

    alert("Registration successful! Please login.");

  

    showLogin(); // Move to login page
});


//============LOGIN BUTTON============
document.getElementById("login-btn").addEventListener("click", function() {

    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

      if(!username || !password){
        alert("Please fill in all fields")
        return;
    }


    //localStorage is a tiny "memory box" in the browser where we can store data
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if(!storedUser){
        alert("Account not found. Please register first")
        return;
    }

    if(username != storedUser.username){
        alert("Account not found. Please register first")
        return;
    }

    if(password != storedUser.password){
        alert("Invalid password")
        return;
    }
if(username === storedUser.username && password === storedUser.password){
  document.getElementById("welcome-text").textContent = "welcome " + storedUser.username;
    showDashboard();
}
  
});

//Logout button
document.getElementById("logout-btn").addEventListener("click", function(){
    showLogin();
});
