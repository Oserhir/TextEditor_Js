let text_input = document.getElementById("text-input");
let text_output = document.getElementById("text-output");

text_input.addEventListener("input", () => {
  text_output.innerText = text_input.value;
});
