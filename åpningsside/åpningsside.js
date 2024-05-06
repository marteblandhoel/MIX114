function redirectToLoginPage() {
  window.location.href = "../logginn/logginn.html";
}
document.addEventListener("DOMContentLoaded", function () {
  var registrerButton = document.querySelector(".button2 .text");

  if (registrerButton) {
    registrerButton.addEventListener("click", function () {
      // Redirect to registrer.html
      window.location.href = "../registrer/registrer.html";
    });
  }
});
