let text_input = document.getElementById("text-input");
let text_output = document.getElementById("text-output");

text_input.addEventListener("input", () => {
  text_output.innerText = text_input.value;
});

let bold = document.getElementById("bold");

bold.addEventListener("click", () => {
  text_output.classList.toggle("bold");
  bold.classList.toggle("active");
});
