document.addEventListener("DOMContentLoaded", function () {
  var carIcon = document.querySelector(".fa-car");

  if (carIcon) {
    // Check if current page is "hjemside.html"
    if (window.location.href.includes("hjemside.html")) {
      carIcon.classList.add("active");
    }

    carIcon.addEventListener("click", function () {
      window.location.href = "../hjemside/hjemside.html";
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

  var planleggReiseButton = document.getElementById("planlegg-reise");
  if (planleggReiseButton) {
    planleggReiseButton.addEventListener("click", function (e) {
      // Redirect to planlegg.html
      window.location.href = "../dinreise/finnreise.html";
    });
  }

  var seKartButton = document.getElementById("se-kart");
  if (seKartButton) {
    seKartButton.addEventListener("click", function (e) {
      // Redirect to kart.html
      window.location.href = "../Kart/kart.html";
    });
  }

  var seVarslingerButton = document.querySelector(".text-button .button");

  if (seVarslingerButton) {
    seVarslingerButton.addEventListener("click", function () {
      // Redirect to varslinger.html
      window.location.href = "../varslinger/varslinger.html";
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
  var locationIcon = document.querySelector(
    ".iconFooter.fa-solid.fa-location-dot"
  );

  if (locationIcon) {
    locationIcon.addEventListener("click", function () {
      // Redirect to dinrute.html
      window.location.href = "../dinreise/finnreise.html";
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
  const goBackButton = document.getElementById("goBackButton");
  goBackButton.addEventListener("click", function () {
    history.back();
  });
  // Event listener for "Logg ut" button
  var loggUtButton = document.querySelector("button[type='knapp']");
  if (loggUtButton) {
    loggUtButton.addEventListener("click", function () {
      // Show logout popup
      var popup = document.querySelector(".component");
      popup.style.display = "block";
    });
  }

  // Event listener for "Avbryt" button in popup
  var avbrytButton = document.querySelector(
    ".component .popup_innhold button:first-of-type"
  );
  if (avbrytButton) {
    avbrytButton.addEventListener("click", function () {
      // Hide the popup
      var popup = document.querySelector(".component");
      popup.style.display = "none";
    });
  }

  // Event listener for "Logg ut" button in popup
  var loggUtPopupButton = document.querySelector(
    ".component .popup_innhold button:last-of-type"
  );
  if (loggUtPopupButton) {
    loggUtPopupButton.addEventListener("click", function () {
      // Perform logout action here
      console.log("Logging out..."); // Placeholder for logout action
      // After logout action, you might want to redirect to login page or do something else
    });
  }
  var loggUtPopupButton = document.querySelector(
    ".component .popup_innhold button:last-of-type"
  );
  if (loggUtPopupButton) {
    loggUtPopupButton.addEventListener("click", function () {
      // Redirect to åpningsside.html after "Logg ut" button in popup is clicked
      window.location.href = "../åpningsside/åpningsside.html";
    });
  }
});
