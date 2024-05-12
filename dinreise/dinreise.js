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
    origin: "Media City Bergen, Bergen",
    destination: "Nesttun Terminal, Bergen",
    travelMode: google.maps.TravelMode.DRIVING,
    provideRouteAlternatives: true,
  };

  directionsService.route(request, (response, status) => {
    if (status === "OK") {
      let fastestRouteIndex = 0;
      let shortestDuration = response.routes[0].legs[0].duration.value; // Initialize with the duration of the first route

      // Determine the fastest route
      response.routes.forEach((route, index) => {
        if (route.legs[0].duration.value < shortestDuration) {
          fastestRouteIndex = index;
          shortestDuration = route.legs[0].duration.value;
        }
      });

      // Manually add markers for the start and end points
      new google.maps.Marker({
        position: response.routes[0].legs[0].start_location,
        map: map,
        title: "Start Point",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scaledSize: new google.maps.Size(42, 42), // Larger red marker
        },
      });

      new google.maps.Marker({
        position: response.routes[0].legs[0].end_location,
        map: map,
        title: "End Point",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scaledSize: new google.maps.Size(42, 42), // Larger red marker
        },
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
            strokeColor: isFastest ? "#0000FF" : "#6699FF", // Dark blue for fastest, light blue for others
            strokeOpacity: 0.8,
            strokeWeight: isFastest ? 7 : 5, // Thicker and on top for the fastest route
            zIndex: isFastest ? 1000 : 500, // Ensure fastest route is on top
          },
        });
        directionsRenderer.setDirections(response);

        if (index === 0 || isSafest) {
          // Only for the fastest and safest routes
          const midPointIndex = Math.floor(route.legs[0].steps.length / 1.5);
          const midPoint = route.legs[0].steps[midPointIndex].start_location;

          const routeTitle = isFastest ? "Raskest" : "Tryggest";
          const contentString = `<div style="padding: 4px; font-size: 14px; color: #333;">
                                    <h4>${routeTitle}</h4>
                                    <p> Tid: <strong>${route.legs[0].duration.text}</strong><br>Avstand: <strong>${route.legs[0].distance.text}</strong></p>
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
}
