document.addEventListener("DOMContentLoaded", function () {
  var buttonContainer = document.getElementById("buttonContainer");
  if (buttonContainer) {
    buttonContainer.addEventListener("click", function (e) {
      window.location.href = "../hjemside/hjemside.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fullName").addEventListener("click", function () {
    document.getElementById("fullName").value = "Anders Andresen";
    document.getElementById("email").value = "anders.andresen@gmail.com";
    document.getElementById("phoneNumber").value = "12345678";
    document.getElementById("password").value = "123";
    document.getElementById("confirmPassword").value = "123";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle password visibility
  function togglePasswordVisibility(inputFieldId) {
    var inputField = document.getElementById(inputFieldId);
    if (inputField.type === "password") {
      inputField.type = "text";
    } else {
      inputField.type = "password";
    }
  }

  // Toggle password visibility when eye icon is clicked
  document
    .getElementById("togglePassword")
    .addEventListener("click", function () {
      togglePasswordVisibility("password");
    });

  document
    .getElementById("toggleConfirmPassword")
    .addEventListener("click", function () {
      togglePasswordVisibility("confirmPassword");
    });
});
