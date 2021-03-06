let text_input = document.getElementById("text-input");
let text_output = document.getElementById("text-output");

window.onload = function () {
  text_input.value = "";
};

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

let underline = document.getElementById("underline");
// Add a .underline classes to 'Formatted Text'
underline.addEventListener("click", () => {
  underline.classList.toggle("active");
  if (text_output.classList.contains("underline")) {
    text_output.classList.remove("underline");
  } else {
    text_output.classList.add("underline");
  }
});

let btn = document.getElementsByClassName("align");
// Toggle the style textAlign attribute
let alignText = (elem, alignType) => {
  text_output.style.textAlign = alignType;

  for (let button of btn) {
    button.classList.remove("active");
  }

  elem.classList.add("active");
};
