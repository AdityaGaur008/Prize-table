const checkbox = document.getElementById("checkbox");
const Advanced = document.getElementById("professional");
const Professional = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
  Advanced.textContent =
    Advanced.textContent === "$249.99" ? "$24.99 " : "$249.99";
    Professional.textContent = Professional.textContent === "$399.99" ? "$39.99" : "$399.99";
});