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

function initMap() {
  const mapOptions = {
    center: { lat: 60.3898141, lng: 5.3333388 },
    zoom: 13,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    zoomControl: true,
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const directionsService = new google.maps.DirectionsService();

  const request = {
    origin: "Bergen Sentrum, Bergen",
    destination: "Nesttun Terminal, Bergen",
    travelMode: google.maps.TravelMode.DRIVING,
    provideRouteAlternatives: true,
  };

  directionsService.route(request, (response, status) => {
    if (status === "OK") {
      response.routes.forEach((route, index) => {
        const directionsRenderer = new google.maps.DirectionsRenderer({
          map: map,
          suppressMarkers: false,
          preserveViewport: true,
          routeIndex: index,
        });
        directionsRenderer.setDirections(response);

        // Assume the first leg of this route
        const midPointIndex = Math.floor(route.legs[0].steps.length / 2);
        const midPoint = route.legs[0].steps[midPointIndex].start_location;

        const contentString = `<div style="padding: 5px; background: white; border: 1px solid black;">Route ${
          index + 1
        }: Time: ${route.legs[0].duration.text}, Distance: ${
          route.legs[0].distance.text
        }</div>`;

        const infoBox = new google.maps.InfoWindow({
          content: contentString,
          position: midPoint,
        });

        infoBox.open(map);
      });
    } else {
      window.alert("Directions request failed due to " + status);
    }
  });
}
