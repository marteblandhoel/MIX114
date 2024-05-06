document.addEventListener("DOMContentLoaded", function () {
  var buttonContainer = document.getElementById("buttonContainer");
  if (buttonContainer) {
    buttonContainer.addEventListener("click", function (e) {
      window.location.href = "../hjemside/hjemside.html";
    });
  }
});
