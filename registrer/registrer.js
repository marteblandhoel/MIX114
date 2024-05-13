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
