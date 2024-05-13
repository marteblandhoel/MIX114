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
  const isCurrentlySelected = selectedIndex === index;
  let strokeColor, strokeWeight, zIndex;

  if (isCurrentlySelected && isSafest) {
    strokeColor = "#0000FF"; // Blue for the safest route when selected
    strokeWeight = 8;
    zIndex = 1000; // Highest zIndex for the selected route
  } else if (isCurrentlySelected && isFastest) {
    strokeColor = "#0000FF"; // Blue for the fastest route when selected
    strokeWeight = 7;
    zIndex = 1000; // Ensure it's on top when selected
  } else if (!isCurrentlySelected && isFastest) {
    strokeColor = "#6699FF"; // Lighter blue for fastest when not selected
    strokeWeight = 4;
    zIndex = 500; // Lower zIndex when not selected
  } else {
    strokeColor = "#6699FF"; // Standard color for non-selected routes
    strokeWeight = 5;
    zIndex = 500; // Normal zIndex for non-selected routes
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
