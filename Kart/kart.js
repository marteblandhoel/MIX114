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
let marker4;
let marker5;

async function initMap() {
  // Import Advanced Marker Library

  // Initialize map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 60.38541107522735, lng: 5.332866370276517 },
    zoom: 16,
    mapId: "DEMO_MAP_ID", // Added mapId required for advanced markers
  });
  var imageIcon = {
    url: "../globals/dinPosisjon.png", // URL to the image
    size: new google.maps.Size(60, 60), // Original size of your image (not necessarily displayed size)
    scaledSize: new google.maps.Size(60, 60), // Size to display the icon
    origin: new google.maps.Point(0, 0), // Origin of the image, typically (0,0)
    anchor: new google.maps.Point(20, 20), // Anchor point, centers the image by width/2, height/2
  };

  var koIcon = {
    url: "../globals/ko.png", // URL to the image
    size: new google.maps.Size(60, 60), // Original size of your image (not necessarily displayed size)
    scaledSize: new google.maps.Size(50, 50), // Size to display the icon
    origin: new google.maps.Point(0, 0), // Origin of the image, typically (0,0)
    anchor: new google.maps.Point(20, 20), // Anchor point, centers the image by width/2, height/2
  };
  var koIcon1 = {
    url: "../globals/ko.png", // URL to the image
    size: new google.maps.Size(60, 60), // Original size of your image (not necessarily displayed size)
    scaledSize: new google.maps.Size(50, 50), // Size to display the icon
    origin: new google.maps.Point(0, 0), // Origin of the image, typically (0,0)
    anchor: new google.maps.Point(20, 20), // Anchor point, centers the image by width/2, height/2
  };
  var snoIcon = {
    url: "../globals/glattSkilt.png", // URL to the image
    size: new google.maps.Size(60, 60), // Original size of your image (not necessarily displayed size)
    scaledSize: new google.maps.Size(50, 50), // Size to display the icon
    origin: new google.maps.Point(0, 0), // Origin of the image, typically (0,0)
    anchor: new google.maps.Point(20, 20), // Anchor point, centers the image by width/2, height/2
  };
  var snoIcon1 = {
    url: "../globals/glattSkilt.png", // URL to the image
    size: new google.maps.Size(60, 60), // Original size of your image (not necessarily displayed size)
    scaledSize: new google.maps.Size(50, 50), // Size to display the icon
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
  marker2 = new google.maps.Marker({
    position: { lat: 60.388561, lng: 5.333082 },
    map: map,
    title: "Moderat Kø",
    icon: koIcon, // URL to the image you want to use as the marker
  });
  marker3 = new google.maps.Marker({
    position: { lat: 60.391509, lng: 5.312936 },
    map: map,
    title: "Moderat Kø",
    icon: koIcon1, // URL to the image you want to use as the marker
  });
  marker4 = new google.maps.Marker({
    position: { lat: 60.393169, lng: 5.31828 },
    map: map,
    title: "Glatt Vei",
    icon: snoIcon, // URL to the image you want to use as the marker
  });
  marker5 = new google.maps.Marker({
    position: { lat: 60.387156, lng: 5.326728 },
    map: map,
    title: "Glatt Vei",
    icon: snoIcon1, // URL to the image you want to use as the marker
  });

  function addCustomMarker(lat, lng, title, iconUrl, width, height) {
    // Main Custom Marker
    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      title: title,
      icon: {
        url: iconUrl,
        scaledSize: new google.maps.Size(width, height),
      },
    });

    // Small Red Dot Marker
    const dotMarker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 3, // Size of the dot
        fillColor: "red",
        fillOpacity: 1,
        strokeColor: "red",
        strokeOpacity: 1,
      },
      zIndex: 1, // Ensures it appears below the main marker if they overlap
    });
  }

  // Draw a line between the markers
  const linePath = new google.maps.Polyline({
    path: [
      { lat: 60.387303, lng: 5.333816 },
      { lat: 60.389255, lng: 5.331156 },
    ],
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 10,
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
  const linePath3 = new google.maps.Polyline({
    path: [
      { lat: 60.390348, lng: 5.313155 },
      { lat: 60.391693, lng: 5.314728 },
    ],
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 9,
  });
  const linePath4 = new google.maps.Polyline({
    path: [
      { lat: 60.391829, lng: 5.317615 },
      { lat: 60.3932, lng: 5.319393 },
    ],
    geodesic: true,
    strokeColor: "blue",
    strokeOpacity: 0.9,
    strokeWeight: 8,
  });

  addCustomMarker(
    60.395332,
    5.327558,
    "Veiarbeid",
    "../globals/veiarbeid1.png",
    60,
    60
  );
  addCustomMarker(
    60.396828,
    5.312616,
    "Veiarbeid",
    "../globals/veiarbeid1.png",
    60,
    60
  );
  addCustomMarker(
    60.389803,
    5.322221,
    "Veiarbeid",
    "../globals/veiarbeid1.png",
    60,
    60
  );
  addCustomMarker(
    60.394082,
    5.331983,
    "Veiarbeid",
    "../globals/veiarbeid1.png",
    60,
    60
  );
  addCustomMarker(
    60.391735,
    5.33666,
    "Veiarbeid",
    "../globals/veiarbeid1.png",
    60,
    60
  );

  linePath.setMap(map);
  linePath2.setMap(map);
  linePath3.setMap(map);
  linePath4.setMap(map);
}
