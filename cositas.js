const tecWh = [
  document.getElementById("C"),
  document.getElementById("D"),
  document.getElementById("E"),
  document.getElementById("F"),
  document.getElementById("G"),
  document.getElementById("A"),
  document.getElementById("B")
];

const tecBl = [
  document.getElementById("CS"),
  document.getElementById("DS"),
  document.getElementById("FS"),
  document.getElementById("GS"),
  document.getElementById("AS")
];

tecWh.forEach((teclas) => {
  teclas.style.width = "75px";
  teclas.style.height = "250px";
});

tecBl.forEach((teclas) => {
  teclas.style.width = "40px";
  teclas.style.height = "160px";
  teclas.style.position = "absolute";

  const posicionesX = [35, 92, 200, 257, 295];
  teclas.style.left = posicionesX[0] + "px";
  teclas.style.left = posicionesX[1] + "px";
  teclas.style.left = posicionesX[2] + "px";
  teclas.style.left = posicionesX[3] + "px";
  teclas.style.left = posicionesX[4] + "px";
});

tecWh[0].addEventListener("click", () => console.log("q"));

tecWh[1].addEventListener("click", () => console.log("w"));

tecWh[2].addEventListener("click", () => console.log("e"));

tecWh[3].addEventListener("click", () => console.log("r"));

tecWh[4].addEventListener("click", () => console.log("t"));

tecWh[5].addEventListener("click", () => console.log("y"));

tecWh[6].addEventListener("click", () => console.log("u"));
