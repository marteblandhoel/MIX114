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
let currentSelectedIndex = 0; // Default to 0

function getCurrentSelectedIndex() {
  return currentSelectedIndex; // Returns the current index
}
document.addEventListener("DOMContentLoaded", function () {
  // Event listener for "Car Mode" knappen
  const carmodeButton = document.querySelector(".button-car-mode");
  carmodeButton.addEventListener("click", function () {
    window.location.href = "../dinreise/carmode.html";
  });
});

function initMap(selectedIndex = 0) {
  const mapOptions = {
    zoom: 14,
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

  directionsService.route(request, (response, status) => {
    if (status === "OK") {
      let fastestRouteIndex = 0;
      let shortestDuration = Number.MAX_SAFE_INTEGER;
      response.routes.forEach((route, index) => {
        if (route.legs[0].duration.value < shortestDuration) {
          fastestRouteIndex = index;
          shortestDuration = route.legs[0].duration.value;
        }
      });

      response.routes.forEach((route, index) => {
        const isFastest = index === fastestRouteIndex;
        const isSafest = index === 1; // Designate the third route as the safest
        renderRoute(map, response, index, isFastest, isSafest, selectedIndex);
      });
    } else {
      window.alert("Directions request failed due to " + status);
    }
  });
}

function renderRoute(map, response, index, isFastest, isSafest, selectedIndex) {
  // Existing code for setting route styles
  const isCurrentlySelected = selectedIndex === index;
  let strokeColor, strokeWeight, zIndex;

  if (isCurrentlySelected && isSafest) {
    strokeColor = "#0000FF";
    strokeWeight = 8;
    zIndex = 1000;
  } else if (isCurrentlySelected && isFastest) {
    strokeColor = "#0000FF";
    strokeWeight = 7;
    zIndex = 1000;
  } else if (!isCurrentlySelected && isFastest) {
    strokeColor = "#6699FF";
    strokeWeight = 4;
    zIndex = 500;
  } else {
    strokeColor = "#6699FF";
    strokeWeight = 5;
    zIndex = 500;
  }

  const directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    suppressMarkers: false,
    preserveViewport: true,
    routeIndex: index,
    polylineOptions: {
      strokeColor: strokeColor,
      strokeWeight: strokeWeight,
      zIndex: zIndex,
    },
  });
  directionsRenderer.setDirections(response);

  // Function to add markers
  function addCustomMarker(lat, lng, title, iconUrl, content) {
    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      title: title,
      icon: {
        url: iconUrl,
        scaledSize: new google.maps.Size(60, 60), // Adjust size according to your preference
      },
    });

    const infoBox = new google.maps.InfoWindow({
      content: `<div style="cursor: pointer;">
                  <strong>${title}</strong><br>
                  ${content}
                </div>`,
    });

    marker.addListener("click", function () {
      infoBox.open(map, marker);
    });

    // Close info window when clicking outside
    google.maps.event.addListener(map, "click", function () {
      infoBox.close();
    });

    google.maps.event.addListener(infoBox, "domready", () => {
      const infoWindowDiv = document.querySelector(".gm-style-iw").parentNode;
      infoWindowDiv.style.cursor = "pointer";
      infoWindowDiv.addEventListener("click", () => {
        infoBox.close();
      });
    });
  }

  // Add the original marker
  addCustomMarker(
    60.302029,
    5.371312,
    "Ny asfalt",
    "../globals/veiarbeid1.png",
    "Vei: 583"
  );

  addCustomMarker(
    60.275569,
    5.359156,
    "Veiarbeid",
    "../globals/veiarbeid1.png",
    "Vei: 583"
  );
  addCustomMarker(
    60.271275,
    5.429612,
    "Glatt Vei",
    "../globals/glattSkilt.png",
    "Vei: E39"
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
  if (isFastest || isSafest) {
    const midPoint =
      response.routes[index].legs[0].steps[
        Math.floor(response.routes[index].legs[0].steps.length / 1.5)
      ].start_location;

    const routeTitle = isFastest ? "Raskeste Rute" : "Tryggeste Rute";
    const currentRouteIndex = isFastest ? 0 : 1; // Set the currentRouteIndex based on the route type

    const contentString = `<div onclick="changeSelectedIndexAndRerender(${currentRouteIndex})" style="cursor: pointer; padding: 4px; font-size: 14px; color: #333;">
                              <h4>${routeTitle}</h4>
                              <p>Tid: <strong>${response.routes[index].legs[0].duration.text}</strong><br>Distanse: <strong>${response.routes[index].legs[0].distance.text}</strong></p>
                              <button class="infoBoxButton" onclick="window.location.href='../Statistikk/statistikk.html?selectedIndex=${index}'">Se Statistikk</button>
                            </div>`;

    const infoBox = new google.maps.InfoWindow({
      content: contentString,
      position: midPoint,
    });
    infoBox.open(map);
  }
}

function changeSelectedIndexAndRerender(newIndex) {
  currentSelectedIndex = newIndex; // Update the global index
  rerenderMap(newIndex); // Rerender the map with the new selected index
}

function rerenderMap(selectedIndex) {
  document.getElementById("map").innerHTML = ""; // Clear the existing map
  initMap(selectedIndex); // Re-initialize the map with the selected route index for specific styling
}
