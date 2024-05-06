// document.addEventListener("DOMContentLoaded", function () {
//   var carIcon = document.querySelector(".fa-car");

//   if (carIcon) {

//     if (window.location.href.includes("hjemside.html")) {
//       carIcon.classList.add("active");
//     }

//     carIcon.addEventListener("click", function () {
//       window.location.href = "hjemside.html";
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var profileIcon = document.querySelector(".fa-user-circle-o");

//   if (profileIcon) {
//     profileIcon.addEventListener("click", function () {
//       window.location.href = "../minprofil/minprofil.html";
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  var carIcon = document.querySelector(".fa-car");

  if (carIcon) {
    // Check if current page is "hjemside.html"
    if (window.location.href.includes("hjemside.html")) {
      carIcon.classList.add("active");
    }

    carIcon.addEventListener("click", function () {
      window.location.href = "hjemside.html";
    });
  }

  var profileIcon = document.querySelector(".fa-user-circle-o");

  if (profileIcon) {
    profileIcon.addEventListener("click", function () {
      window.location.href = "../minprofil/minprofil.html";
    });
  }

  var seBelonningerButton = document.getElementById("se-belonninger");
  if (seBelonningerButton) {
    seBelonningerButton.addEventListener("click", function (e) {
      // Redirect to poengside.html
      window.location.href = "../belønning/poengside.html";
    });
  }
});
