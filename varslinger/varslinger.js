document.addEventListener("DOMContentLoaded", function () {
  var goBackButton = document.getElementById("goBackButton");
  if (goBackButton) {
    goBackButton.addEventListener("click", function (e) {
      // Redirect to hjemside.html
      window.location.href = "../hjemside/hjemside.html";
    });
  }
});
