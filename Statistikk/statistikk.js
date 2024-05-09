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
  var poengArrowIcon = document.querySelector(".arrowRight");

  if (poengArrowIcon) {
    poengArrowIcon.addEventListener("click", function () {
      window.location.href = "../belønning/poengside.html";
    });
  }
});


//highchart script

document.addEventListener("DOMContentLoaded", function () {
    var selectedOption = "5"; // Default value to initialize the dashboard
    var dropdownMenu = document.getElementById("dropdownMenu");

    // Event listener for dropdown changes
    dropdownMenu.addEventListener("change", function () {
      selectedOption = this.value; // Update the variable with the new selected option
      fetchDataAndUpdateDashboard(); // Fetch and update the dashboard with the new selection
    });

    // API URL
    const apiUrl = "https://api.npoint.io/c4261b1dc876f9137329";

    // Function to fetch data and update the dashboard
    function fetchDataAndUpdateDashboard() {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok, status: " + response.status
            );
          }
          return response.json(); // Parse JSON data
        })
        .then((data) => {
          updateDashboardComponents(data); // Update dashboard components with the fetched data
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }

    // Function to update dashboard components based on fetched data
    function updateDashboardComponents(data) {
      const ulykkeData = data.data[0]["Siste" + selectedOption + "År"];
      const ulykke = ulykkeData["AntallAlvorligeUlykker"];
      const dodelig = ulykkeData["AntallDøde"];
      const kpi1 = document.getElementById("dashboard-kpi-1");
      const kpi2 = document.getElementById("dashboard-kpi-2");
      if (kpi1) {
        kpi1.innerHTML = "";
      }
      if (kpi2) {
        kpi2.innerHTML = "";
      }

      // Assuming the dashboard system allows updates like this
      Dashboards.board(
        "container",
        {
          components: [
            {
              renderTo: "dashboard-kpi-1",
              type: "KPI",
              title: "Alvorlige ulykker",
              subtitle:
                "antall alvorlige ulykker siste " + selectedOption + " år",
              value: ulykke, // Set the dynamic value here
            },
            {
              renderTo: "dashboard-kpi-2",
              type: "KPI",
              title: "Dødsfall",
              subtitle: "antall dødsfall siste " + selectedOption + " år",
              value: dodelig, // Set the dynamic value here
            },
          ],
        },
        true
      ).then((dashboard) => {
        // Here you might access and use dashboard object methods if additional interactions are needed
      });

      // Update Highcharts for the Pie chart
      Highcharts.chart("dashboard-kpi-4", {
        chart: {
          type: "pie",
        },
        title: {
          text: "Ulykkestype",
        },
        series: [
          {
            name: "Antall",
            data: [
              {
                name: "Frontkollisjon",
                y: ulykkeData.UlykkeType.Frontkollisjon,
              },
              {
                name: "Påkjørsel av fotgjenger",
                y: ulykkeData.UlykkeType.PåkjørtFotgjenger,
              },
              {
                name: "Påkjøring bakfra",
                y: ulykkeData.UlykkeType.PåkjøringBakfra,
              },
              {
                name: "Andre ulykker",
                y: ulykkeData.UlykkeType.AndreUlykker,
              },
            ],
          },
        ],
      });

      // Update Highcharts for the Column chart
      Highcharts.chart("dashboard-chart-1", {
        chart: {
          type: "column",
        },
        title: {
          text: "Alder og kjønn på ulykkesutsatte",
        },
        xAxis: {
          categories: ["0-20 År", "21-40 År", "41-60 År", "61+ År"],
        },
        series: [
          {
            name: "Kvinne",
            data: [
              ulykkeData.AlderUtsatte["0-20"].Kvinne,
              ulykkeData.AlderUtsatte["21-40"].Kvinne,
              ulykkeData.AlderUtsatte["41-60"].Kvinne,
              ulykkeData.AlderUtsatte["61+"].Kvinne,
            ],
            color: "pink",
          },
          {
            name: "Mann",
            data: [
              ulykkeData.AlderUtsatte["0-20"].Mann,
              ulykkeData.AlderUtsatte["21-40"].Mann,
              ulykkeData.AlderUtsatte["41-60"].Mann,
              ulykkeData.AlderUtsatte["61+"].Mann,
            ],
            color: "blue",
          },
        ],
      });
    }

    // Initial call to populate the dashboard
    fetchDataAndUpdateDashboard();
  });