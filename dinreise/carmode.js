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

let map;
let directionsService;
let directionsRenderer;

function initMap() {
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: "#0000FF",
      strokeOpacity: 0.8,
      strokeWeight: 8,
    },
    preserveViewport: true, // Prevents the map from auto-zooming and auto-centering to fit the route
  });
  const mapOptions = {
    zoom: 18, // Set your desired initial zoom level
    center: { lat: 60.392, lng: 5.324 }, // Set your desired initial center
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsRenderer.setMap(map);

  calculateAndDisplayRoute();
}

function calculateAndDisplayRoute() {
  const request = {
    origin: "Media City Bergen, Bergen", // Set origin
    destination: "Syfteland, 5212", // Set destination
    travelMode: "DRIVING",
  };

  directionsService.route(request, (response, status) => {
    if (status === "OK") {
      directionsRenderer.setDirections(response);
      map.setCenter({ lat: 60.386666, lng: 5.332099 });
      map.setZoom(17);

      // Add custom markers after setting directions
      addCustomMarkers();
      // Shadow Marker
      const shadowMarker = new google.maps.Marker({
        position: { lat: 60.38581, lng: 5.332323 },
        map: map,
        icon: {
          url: "../globals/100%.svg",
          scaledSize: new google.maps.Size(86, 86), // Size of the shadow circle
          anchor: new google.maps.Point(43, 43), // Center the shadow below the icon
        },
      });

      // Navigation Marker
      const navigationMarker = new google.maps.Marker({
        position: { lat: 60.38581, lng: 5.332323 },
        map: map,
        title: "Start Point",
        icon: {
          url: "../globals/navigation.svg",
          scaledSize: new google.maps.Size(64, 64),
          anchor: new google.maps.Point(32, 32), // Center the navigation icon
        },
      });
    } else {
      window.alert("Directions request failed due to " + status);
    }
  });
}

function addCustomMarkers() {
  addCustomMarker(
    60.302029,
    5.371312,
    "Ny asfalt",
    "../globals/veiarbeid1.png"
  );

  addCustomMarker(
    60.271275,
    5.429612,
    "Glatt Vei",
    "../globals/glattSkilt.png"
  );
  // Draw a line between the markers
  const linePath = new google.maps.Polyline({
    path: [
      { lat: 60.302299, lng: 5.370753 },
      { lat: 60.300813, lng: 5.373323 },
    ],
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 8,
    zIndex: 10000,
  });
  linePath.setMap(map);
  // Draw a line between the markers
  const linePath2 = new google.maps.Polyline({
    path: [
      { lat: 60.271275, lng: 5.429612 },

      { lat: 60.266655, lng: 5.430878 },
    ],
    geodesic: true,
    strokeColor: "#00B2FF",
    strokeOpacity: 1.0,
    strokeWeight: 8,
    zIndex: 10000,
  });
  linePath2.setMap(map);
}

function addCustomMarker(lat, lng, title, iconUrl) {
  const marker = new google.maps.Marker({
    position: { lat, lng },
    map: map,
    title: title,
    icon: {
      url: iconUrl,
      scaledSize: new google.maps.Size(60, 60), // Adjust size according to your preference
    },
  });
}
