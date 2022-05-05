var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

let text = document.getElementById("text");
let author = document.getElementById("author");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let data;
let result = new XMLHttpRequest();
result.open("GET", "https://type.fit/api/quotes");
result.send();
result.addEventListener("load", () => {
  [...data] = JSON.parse(result.responseText);
});
function generate() {
    let rno = Math.trunc(Math.random() * 11) + 1;
    color1.style.backgroundColor = `${colors[ rno ]}`;
    rno = Math.trunc(Math.random() * 11) + 1;
  color2.style.backgroundColor = `${colors[rno]}`;
  let randomno = Math.trunc(Math.random() * 1643) + 1;
  text.textContent = data[randomno].text;
  author.textContent = "~ " + (data[randomno].author ?? "Dharma");
}
setInterval(() => {
  generate();
}, 2500);
