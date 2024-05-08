document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the goBackButton
  const goBackButton = document.getElementById("goBackButton");
  goBackButton.addEventListener("click", function () {
    history.back();
  });
});
