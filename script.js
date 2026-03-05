//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
      } else {
        input.value = "";
      }
      e.preventDefault();
    }
    // Only allow numbers
    else if (e.key >= "0" && e.key <= "9") {
      input.value = ""; // Clear previous value before typing
    }
    // Prevent letters or other keys
    else if (e.key !== "Tab") {
      e.preventDefault();
    }
  });

  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

// Autofocus the first input on load
window.addEventListener("DOMContentLoaded", () => {
  inputs[0].focus();
});