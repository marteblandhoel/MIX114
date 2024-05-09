document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the goBackButton
  const goBackButton = document.getElementById("goBackButton");
  goBackButton.addEventListener("click", function () {
    history.back();
  });
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

  // Get reference to the "Dine poeng" div
  var dinePoengDiv = document.querySelector(".title");

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
    // Update the content of the "Dine poeng" div after using the popup
    dinePoengDiv.textContent = "Dine poeng: 5";
  });

  // Get reference to the "Bruk" button inside the coupon component
  var brukButton = document.querySelector(".hent-wrapper .hent");

  // Get reference to the coupon container
  var couponContainer = document.querySelector(".component-1");

  // Add click event listener to the "Bruk" button
  brukButton.addEventListener("click", function () {
    // Hide the coupon container
    couponContainer.style.display = "none";
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
document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the "Bruk" button inside the coupon component
  var brukButton = document.querySelector(".hent-wrapper .hent");

  // Get reference to the coupon container
  var couponContainer = document.querySelector(".component-1");

  // Get reference to the next component after the coupon container
  var nextComponent = document.querySelector(".component-2");

  // Add click event listener to the "Bruk" button
  brukButton.addEventListener("click", function () {
    // Hide the coupon container
    couponContainer.style.display = "none";

    // Adjust the positioning of the next component
    nextComponent.style.position = "absolute"; // Change position to absolute
    nextComponent.style.top = "531px"; // Adjust top position to match component-1
  });
});
