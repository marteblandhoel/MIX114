document.addEventListener("DOMContentLoaded", function () {
  var goBackButton = document.getElementById("goBackButton");
  if (goBackButton) {
    goBackButton.addEventListener("click", function (e) {
      // Redirect to hjemside.html
      window.location.href = "../minprofil/minprofil.html";
    });
  }
});

function filterVarslinger() {
  const checkbox = document.getElementById("nokPoeng");
  const userPointsText = document.querySelector(".title").textContent;
  const userPoints = parseInt(userPointsText.split(":")[1].trim()); // Henter brukerens poeng
  const rewards = document.querySelectorAll(".rectangle-group"); // Alle belønnings-elementer

  rewards.forEach((reward) => {
    const pointsRequiredText = reward.querySelector(".poeng").textContent;
    const pointsRequired = parseInt(pointsRequiredText.split(" ")[0]); // Henter poengkravet for belønningen

    if (checkbox.checked) {
      // Vis kun belønninger der brukeren har nok poeng
      reward.style.display = userPoints >= pointsRequired ? "block" : "none";
    } else {
      // Vis alle belønninger når boksen ikke er avkrysset
      reward.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const filterTrigger = document.querySelector(".filter .default");
  const filterMenu = document.getElementById("filterMenu");

  if (filterTrigger) {
    filterTrigger.addEventListener("click", () => {
      filterMenu.style.display =
        filterMenu.style.display === "none" ? "block" : "none";
    });
  }

  // Attach event listener for changes on the checkbox
  const nokPoengCheckbox = document.getElementById("nokPoeng");
  nokPoengCheckbox.addEventListener("change", filterVarslinger);
});
