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
      window.location.href = "../dinreise/finnreise.html";
    });
  }
  var carIcon = document.querySelector(".fa-car");

  if (carIcon) {
    carIcon.addEventListener("click", function () {
      window.location.href = "../hjemside/hjemside.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fromInput = document.getElementById("fromInput");
  const toInput = document.getElementById("toInput");
  const goButton = document.getElementById("goButton");

  // Default addresses
  const defaultFromAddress = "Media City Bergen";
  const defaultToAddress = "Syfteland";

  // Initially hide the button
  goButton.style.display = "none";

  // Focus and blur event listeners for "From" and "To" inputs
  fromInput.addEventListener("focus", function () {
    if (fromInput.value === "") {
      fromInput.value = defaultFromAddress;
    }
    updateGoButtonVisibility(); // Update button visibility when focused
  });
  fromInput.addEventListener("blur", function () {
    if (fromInput.value === defaultFromAddress) {
      fromInput.value = defaultFromAddress; // Keep default if not changed
    }
    updateGoButtonVisibility(); // Update button visibility when blurred
  });

  toInput.addEventListener("focus", function () {
    if (toInput.value === "") {
      toInput.value = defaultToAddress;
    }
    updateGoButtonVisibility(); // Update button visibility when focused
  });
  toInput.addEventListener("blur", function () {
    if (toInput.value === defaultToAddress) {
      toInput.value = defaultToAddress; // Keep default if not changed
    }
    updateGoButtonVisibility(); // Update button visibility when blurred
  });

  // Function to update button visibility
  function updateGoButtonVisibility() {
    if (fromInput.value !== "" && toInput.value !== "") {
      goButton.style.display = "block"; // Show button if both inputs are not empty
    } else {
      goButton.style.display = "none"; // Otherwise, hide the button
    }
  }

  // Redirect on button click
  goButton.addEventListener("click", function () {
    const from = encodeURIComponent(fromInput.value);
    const to = encodeURIComponent(toInput.value);
    window.location.href = `dinreise.html?from=${from}&to=${to}`;
  });
});
let map;
let marker1;

async function initMap() {
  // Import Advanced Marker Library
  // Initialize map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 60.38541107522735, lng: 5.332866370276517 },
    zoom: 16,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
    mapId: "DEMO_MAP_ID", // Added mapId required for advanced markers
  });
  var imageIcon = {
    url: "../globals/dinPosisjon.png", // URL to the image
    size: new google.maps.Size(60, 60), // Original size of your image (not necessarily displayed size)
    scaledSize: new google.maps.Size(60, 60), // Size to display the icon
    origin: new google.maps.Point(0, 0), // Origin of the image, typically (0,0)
    anchor: new google.maps.Point(20, 20), // Anchor point, centers the image by width/2, height/2
  };
  // Initialize markers with custom SVG images
  marker1 = new google.maps.Marker({
    position: { lat: 60.38541107522735, lng: 5.332866370276517 },
    map: map,
    title: "Your Position",
    icon: imageIcon, // URL to the image you want to use as the marker
  });
}
