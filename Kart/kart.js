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
  var locationIcon = document.querySelector(
    ".iconFooter.fa-solid.fa-location-dot"
  );

  if (locationIcon) {
    locationIcon.addEventListener("click", function () {
      // Redirect to dinrute.html
      window.location.href = "../dinreise/finnreise.html";
    });
  }
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

  // bruker ikonene fra fontawasome
  const customImage2 = document.createElement("i");
  customImage2.className = "fa-solid fa-triangle-exclamation"; // FontAwesome class
  customImage2.style.fontSize = "40px"; // Set the size of the icon
  customImage2.style.color = "red"; // Set the color of the icon
  customImage2.style.backgroundColor = "white"; // Background color
  customImage2.style.padding = "5px"; // Padding to ensure background visibility
  customImage2.style.borderRadius = "50%"; // Circular background
  customImage2.style.display = "flex"; // Ensures it behaves like an image
  customImage2.style.justifyContent = "center"; // Center the icon
  customImage2.style.alignItems = "center"; // Vertically center the icon

  const customImage3 = document.createElement("i");
  customImage3.className = "fa-solid fa-snowflake"; // FontAwesome class
  customImage3.style.fontSize = "40px"; // Set the size of the icon
  customImage3.style.color = "blue"; // Set the color of the icon
  customImage3.style.backgroundColor = "white"; // Background color
  customImage3.style.padding = "5px"; // Padding to ensure background visibility
  customImage3.style.borderRadius = "50%"; // Circular background
  customImage3.style.display = "flex"; // Ensures it behaves like an image
  customImage3.style.justifyContent = "center"; // Center the icon
  customImage3.style.alignItems = "center"; // Vertically center the icon

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
