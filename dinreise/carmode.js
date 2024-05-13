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
      // Manually set center and zoom again if needed
      map.setCenter({ lat: 60.385853, lng: 5.332325 });
      map.setZoom(17);

      // Extract the starting point from the response
      const startLocation = response.routes[0].legs[0].start_location;

      // Create and place the custom marker
      const marker = new google.maps.Marker({
        position: { lat: 60.385635, lng: 5.332388 },
        map: map,
        title: "Start Point",
        icon: {
          url: "../globals/navigation.svg", // Path to the custom SVG icon
          scaledSize: new google.maps.Size(64, 64), // Adjust size as needed
        },
      });
    } else {
      window.alert("Directions request failed due to " + status);
    }
  });
}
