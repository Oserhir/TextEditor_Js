let text_input = document.getElementById("text-input");
let text_output = document.getElementById("text-output");

// Update the text in the "Formatted Text" section
text_input.addEventListener("input", () => {
  text_output.innerText = text_input.value;
});

// Add a .bold classes to 'Formatted Text'
let bold = document.getElementById("bold");

bold.addEventListener("click", () => {
  text_output.classList.toggle("bold");
  bold.classList.toggle("active");
});

// Add a .italic classes to 'Formatted Text'
let italic = document.getElementById("italic");

italic.addEventListener("click", () => {
  text_output.classList.toggle("italic");
  italic.classList.toggle("active");
});


