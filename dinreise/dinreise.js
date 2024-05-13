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
    window.location.href = "../Statistikk/statistikk.html";
  });
  // Event listener for "Car Mode" knappen
  const carmodeButton = document.querySelector(".button-car-mode");
  carmodeButton.addEventListener("click", function () {
    window.location.href = "../dinreise/carmode.html";
  });
});

function initMap() {
  const mapOptions = {
    center: { lat: 60.38564, lng: 5.333326 },
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const directionsService = new google.maps.DirectionsService();

  const request = {
    origin: "Media City, Bergen",
    destination: "Syfteland, 5212",
    travelMode: google.maps.TravelMode.DRIVING,
    provideRouteAlternatives: true,
  };

  let renderers = [];

  directionsService.route(request, (response, status) => {
    if (status === "OK") {
      let fastestRouteIndex = 0;
      let shortestDuration = response.routes[0].legs[0].duration.value;

      // Determine the fastest route
      response.routes.forEach((route, index) => {
        if (route.legs[0].duration.value < shortestDuration) {
          fastestRouteIndex = index;
          shortestDuration = route.legs[0].duration.value;
        }
      });

      // Render each route with specific styles
      response.routes.forEach((route, index) => {
        const isFastest = index === fastestRouteIndex;
        const isSafest = index === 2; // Designate the third route as the safest

        const directionsRenderer = new google.maps.DirectionsRenderer({
          map: map,
          suppressMarkers: true,
          preserveViewport: true,
          routeIndex: index,
          polylineOptions: {
            strokeColor: isFastest ? "#0000FF" : "#6699FF",
            strokeWeight: isFastest ? 7 : 5,
            zIndex: isFastest ? 1000 : 500,
          },
        });
        directionsRenderer.setDirections(response);
        renderers.push(directionsRenderer);

        if (index === 0 || isSafest) {
          const midPoint =
            route.legs[0].steps[Math.floor(route.legs[0].steps.length / 2)]
              .start_location;
          const routeTitle = isFastest ? "Fastest Route" : "Safest Route";
          const contentString = `<div onclick="selectRoute(${index})" style="cursor: pointer; padding: 4px; font-size: 14px; color: #333;">
                                    <h4>${routeTitle}</h4>
                                    <p> Time: <strong>${route.legs[0].duration.text}</strong><br>Distance: <strong>${route.legs[0].distance.text}</strong></p>
                                  </div>`;

          const infoBox = new google.maps.InfoWindow({
            content: contentString,
            position: midPoint,
          });
          infoBox.open(map);
        }
      });
    } else {
      window.alert("Directions request failed due to " + status);
    }
  });
  window.selectRoute = function (selectedIndex) {
    renderers.forEach((renderer, index) => {
      renderer.setOptions({
        polylineOptions: {
          strokeColor: index === selectedIndex ? "#0000FF" : "#6699FF",
          strokeWeight: index === selectedIndex ? 7 : 5,
          zIndex: index === selectedIndex ? 1000 : 500,
        },
      });
    });
  };
}
