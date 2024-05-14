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
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const sortIcon = document.querySelector(".fa-sort");
  const sortMenu = document.getElementById("sortMenu");
  const filterMenu = document.getElementById("filterMenu");
  const filterIcon = document.querySelector(".fa-filter");

  // Toggle sort menu
  sortIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent bubbling to outer elements
    sortMenu.style.display =
      sortMenu.style.display === "none" || !sortMenu.style.display
        ? "flex"
        : "none";
    filterMenu.style.display = "none"; // Ensure filter menu is closed
  });

  // Toggle filter menu
  filterIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent bubbling to outer elements
    filterMenu.style.display =
      filterMenu.style.display === "none" || !filterMenu.style.display
        ? "flex"
        : "none";
    sortMenu.style.display = "none"; // Ensure sort menu is closed
  });

  // Click anywhere on the window to close both menus if open
  window.addEventListener("click", function () {
    if (sortMenu.style.display === "flex") {
      sortMenu.style.display = "none";
    }
    if (filterMenu.style.display === "flex") {
      filterMenu.style.display = "none";
    }
  });

  // Prevent clicks within the menus from closing them
  sortMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  filterMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

function sortVarslinger(criteria) {
  var list = document.querySelector(".varslinger-liste");
  var notifications = Array.from(list.children);

  notifications.sort(function (a, b) {
    switch (criteria) {
      case "naermest":
        return parseDistance(a) - parseDistance(b);

      case "flestLikes":
        var likesA = parseInt(a.querySelector(".up p").textContent);
        var likesB = parseInt(b.querySelector(".up p").textContent);
        return likesB - likesA;

      case "nyeste":
        var timeA = convertTimeToMinutes(
          a.querySelector(".italic").textContent
        );
        var timeB = convertTimeToMinutes(
          b.querySelector(".italic").textContent
        );
        return timeA - timeB;
    }
  });

  notifications.forEach(function (node) {
    list.appendChild(node);
  });
}

function parseDistance(varsling) {
  var distanceText = varsling.querySelector(".hvem_hvor").textContent;
  var matches = distanceText.match(/(\d+)\s*km/);
  return matches ? parseInt(matches[1]) : 99999; // Return a large number if no match is found
}

function convertTimeToMinutes(timeStr) {
  var [value, unit] = timeStr.split(" ");
  value = parseInt(value);
  if (unit.startsWith("min")) return value;
  if (unit.startsWith("time")) return value * 60; // Convert hours to minutes
  return value * 1440; // Convert days to minutes (assuming 'dager')
}

// sorting varsler
function toggleSortMenu() {
  var sortMenu = document.getElementById("sortMenu");
  var filterMenu = document.getElementById("filterMenu");

  // Toggle the sort menu
  sortMenu.style.display = sortMenu.style.display === "flex" ? "none" : "flex";

  // Ensure the filter menu is closed when the sort menu is toggled
  if (sortMenu.style.display === "flex") {
    filterMenu.style.display = "none";
  }
}
//filtrering for varslene!!

function toggleFilterMenu() {
  var sortMenu = document.getElementById("sortMenu");
  var filterMenu = document.getElementById("filterMenu");

  // Toggle the filter menu
  filterMenu.style.display =
    filterMenu.style.display === "flex" ? "none" : "flex";

  // Ensure the sort menu is closed when the filter menu is toggled
  if (filterMenu.style.display === "flex") {
    sortMenu.style.display = "none";
  }
}

function filterVarslinger() {
  let veiarbeider = document.getElementById("veiarbeider").checked;
  let privatsjåfør = document.getElementById("privatsjåfør").checked;
  let veiansvarlig = document.getElementById("veiansvarlig").checked;
  let varslinger = document.querySelectorAll(".varsling");

  if (!veiarbeider && !privatsjåfør && !veiansvarlig) {
    // If no filter is selected, show all notifications
    varslinger.forEach((varsling) => (varsling.style.display = ""));
    return;
  }

  varslinger.forEach(function (varsling) {
    let hvem = varsling.querySelector(".hvem_hvor p").textContent.trim();
    // Display notifications that match any of the checked categories
    if (
      (hvem === "Veiarbeider" && veiarbeider) ||
      (hvem === "Privatsjåfør" && privatsjåfør) ||
      (hvem === "Veiansvarlig" && veiansvarlig)
    ) {
      varsling.style.display = "";
    } else {
      varsling.style.display = "none";
    }
  });

  sortMenu.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the goBackButton
  const goBackButton = document.getElementById("goBackButton");
  goBackButton.addEventListener("click", function () {
    history.back();
  });
});
