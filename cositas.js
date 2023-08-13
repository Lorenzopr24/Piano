const tecWh = [
  document.getElementById("C"),
  document.getElementById("D"),
  document.getElementById("E"),
  document.getElementById("F"),
  document.getElementById("G"),
  document.getElementById("A"),
  document.getElementById("B"),
];

const tecBl = [
  document.getElementById("CS"),
  document.getElementById("DS"),
  document.getElementById("FS"),
  document.getElementById("GS"),
  document.getElementById("AS"),
];

tecWh.forEach((tecla) => {
  tecla.style.width = "75px";
  tecla.style.height = "250px";
});

tecBl.forEach((tecla, index) => {
  tecla.style.width = "40px";
  tecla.style.height = "160px";
  tecla.style.position = "absolute";

  const posicionesX = [57, 137, 294, 375, 454];
  tecla.style.left = posicionesX[index] + "px";
});

tecWh[0].addEventListener("click", () => console.log("q"));

tecWh[1].addEventListener("click", () => console.log("w"));

tecWh[2].addEventListener("click", () => console.log("e"));

tecWh[3].addEventListener("click", () => console.log("r"));

tecWh[4].addEventListener("click", () => console.log("t"));

tecWh[5].addEventListener("click", () => console.log("y"));

tecWh[6].addEventListener("click", () => console.log("u"));

tecBl[0].addEventListener("click", () => console.log("1"));

tecBl[1].addEventListener("click", () => console.log("2"));

tecBl[2].addEventListener("click", () => console.log("3"));

tecBl[3].addEventListener("click", () => console.log("4"));

tecBl[4].addEventListener("click", () => console.log("5"));
