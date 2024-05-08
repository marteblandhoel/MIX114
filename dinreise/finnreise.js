document.addEventListener("DOMContentLoaded", function () {
  const fromInput = document.getElementById("fromInput");
  const toInput = document.getElementById("toInput");
  const goButton = document.getElementById("goButton");

  // Default addresses
  const defaultFromAddress = "Bergen Sentrum";
  const defaultToAddress = "Nesstun Terminal";

  // Initially hide the button
  goButton.style.display = "none";

  // Focus and blur event listeners for "From" and "To" inputs
  fromInput.addEventListener("focus", function () {
    if (fromInput.value === "") {
      fromInput.value = defaultFromAddress;
    }
  });
  fromInput.addEventListener("blur", function () {
    if (fromInput.value === defaultFromAddress) {
      fromInput.value = defaultFromAddress; // Keep default if not changed
    }
    updateGoButtonVisibility();
  });

  toInput.addEventListener("focus", function () {
    if (toInput.value === "") {
      toInput.value = defaultToAddress;
    }
  });
  toInput.addEventListener("blur", function () {
    if (toInput.value === defaultToAddress) {
      toInput.value = defaultToAddress; // Keep default if not changed
    }
    updateGoButtonVisibility();
  });

  // Function to update button visibility
  function updateGoButtonVisibility() {
    if (fromInput.value !== "" && toInput.value !== "") {
      goButton.style.display = "block"; // Show button if both inputs are not empty
    } else {
      goButton.style.display = "none"; // Otherwise, hide the button
    }
  }

  // Redirect on button click
  goButton.addEventListener("click", function () {
    const from = encodeURIComponent(fromInput.value);
    const to = encodeURIComponent(toInput.value);
    window.location.href = `dinreise.html?from=${from}&to=${to}`;
  });
});
