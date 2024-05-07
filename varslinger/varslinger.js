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
      window.location.href = "../dinreise/dinreise.html";
    });
  }
});

function toggleFilterMenu() {
  var menu = document.getElementById("filterMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
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
}
