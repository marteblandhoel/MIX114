function login() {
  // Get email and password inputs
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  // Check if email and password are correct
  if (email === "@email" && password === "123") {
    // Redirect to hjemside.html upon successful login
    window.location.href = "../hjemside/hjemside.html";
  } else {
    // Display an error message or handle incorrect login
    alert("Incorrect email or password!");
  }
}
