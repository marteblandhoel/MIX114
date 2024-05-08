document.addEventListener("DOMContentLoaded", function () {
  var goBackButton = document.getElementById("goBackButton");
  if (goBackButton) {
    goBackButton.addEventListener("click", function (e) {
      // Redirect to hjemside.html
      window.location.href = "../minprofil/minprofil.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var profileIcon = document.querySelector(".fa-user-circle-o");

  if (profileIcon) {
    // Check if current page is "minprofil.html"
    if (window.location.href.includes("minprofil.html")) {
      profileIcon.classList.add("active");
    }

    profileIcon.addEventListener("click", function () {
      window.location.href = "../minprofil/minprofil.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var carIcon = document.querySelector(".fa-car");

  if (carIcon) {
    carIcon.addEventListener("click", function () {
      window.location.href = "../hjemside/hjemside.html";
    });
  }
  var varselIcon = document.querySelector(
    ".iconFooter.fa.fa-exclamation-triangle"
  );

  if (varselIcon) {
    varselIcon.addEventListener("click", function () {
      console.log("Icon clicked!"); // Debugging line
      window.location.href = "../varslinger/varslinger.html";
    });
  }
  var mapsIcon = document.querySelector(
    ".iconFooter.fa-solid.fa-map-location-dot"
  );

  if (mapsIcon) {
    mapsIcon.addEventListener("click", function () {
      // Redirect to kart.html
      window.location.href = "../kart/kart.html";
    });
  }
  var locationIcon = document.querySelector(
    ".iconFooter.fa-solid.fa-location-dot"
  );

  if (locationIcon) {
    locationIcon.addEventListener("click", function () {
      // Redirect to dinrute.html
      window.location.href = "../dinreise/dinreise.html";
    });
  }
});

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the button with class "hent"
  var hentButton = document.querySelector(".hent");

  // Get reference to the popup component
  var popupComponent = document.querySelector(".component");

  // Add click event listener to the hent button
  hentButton.addEventListener("click", function () {
    // Toggle the display property of the popup component
    if (
      popupComponent.style.display === "none" ||
      popupComponent.style.display === ""
    ) {
      popupComponent.style.display = "block";
    } else {
      popupComponent.style.display = "none";
    }
  });
  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    // Check if the clicked element is not inside the popup component
    if (!popupComponent.contains(event.target) && event.target !== hentButton) {
      // Hide the popup component
      popupComponent.style.display = "none";
    }
  });
});
