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
  var carIcon = document.querySelector(".fa-car");

  if (carIcon) {
    carIcon.addEventListener("click", function () {
      window.location.href = "../hjemside/hjemside.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var expandIcon = document.getElementById("expand-icon");
  var collapseIcon = document.getElementById("collapse-icon");

  expandIcon.addEventListener("click", function () {
    document.getElementById("shortContainer").style.display = "none";
    document.getElementById("expandedContainer").style.display = "flex"; // Changed from 'block' to 'flex' if you want to maintain flex properties
  });

  collapseIcon.addEventListener("click", function () {
    document.getElementById("expandedContainer").style.display = "none";
    document.getElementById("shortContainer").style.display = "flex"; // Same here for consistency
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const statistikkButton = document.querySelector(".text-wrapper");
  statistikkButton.addEventListener("click", function () {
    window.location.href = "../Statestikk/statestikk.html";
  });
  // Event listener for "Car Mode" knappen
  const carmodeButton = document.querySelector(".button-car-mode");
  carmodeButton.addEventListener("click", function () {
    window.location.href = "../dinreise/carmode.html";
  });
});

let map;
let marker1;
let marker2;
let marker3;

async function initMap() {
  // Import Advanced Marker Library
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Initialize map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 60.3856, lng: 5.3329 },
    zoom: 16,
    mapId: "DEMO_MAP_ID", // Added mapId required for advanced markers
  });

  // Custom SVG image for markers
  const customImage1 = document.createElement("img");
  customImage1.src = "../globals/danger.svg"; // Path to your SVG file
  customImage1.style.width = "40px"; // Set width of the SVG
  customImage1.style.height = "40px"; // Set height of the SVG
  customImage1.style.backgroundColor = "gray";

  const customImage2 = document.createElement("img");
  customImage2.src = "../globals/danger.svg"; // Path to your SVG file
  customImage2.style.width = "40px"; // Set width of the SVG
  customImage2.style.height = "40px"; // Set height of the SVG
  customImage2.style.backgroundColor = "red";

  const customImage3 = document.createElement("img");
  customImage3.src = "../globals/danger.svg"; // Path to your SVG file
  customImage3.style.width = "40px"; // Set width of the SVG
  customImage3.style.height = "40px"; // Set height of the SVG
  customImage3.style.backgroundColor = "blue";

  // Initialize markers with custom SVG images
  marker1 = new google.maps.marker.AdvancedMarkerElement({
    position: { lat: 60.38657, lng: 5.332119 },
    map: map,
    title: "Your Position",
    content: customImage1,
  });

  marker2 = new google.maps.marker.AdvancedMarkerElement({
    position: { lat: 60.388315, lng: 5.332535 },
    map: map,
    title: "Interest Point 1",
    content: customImage2,
  });

  marker3 = new google.maps.marker.AdvancedMarkerElement({
    position: { lat: 60.386632, lng: 5.326443 },
    map: map,
    title: "Glatt",
    content: customImage3,
  });

  // Draw a line between the markers
  const linePath = new google.maps.Polyline({
    path: [
      { lat: 60.387303, lng: 5.333816 },
      { lat: 60.389255, lng: 5.331156 },
    ],
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 8,
  });
  const linePath2 = new google.maps.Polyline({
    path: [
      { lat: 60.386426, lng: 5.326123 },
      { lat: 60.387173, lng: 5.327236 },
    ],
    geodesic: true,
    strokeColor: "blue",
    strokeOpacity: 1.0,
    strokeWeight: 8,
  });

  linePath.setMap(map);
  linePath2.setMap(map);
}
