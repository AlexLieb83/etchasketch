const gridContainer = document.querySelector(".grid-container");
const resizeBtn = document.getElementById("resize");

let squareNum = 256;

resizeBtn.addEventListener("click", () => {
  const resizeNum = Number(
    prompt("Enter a new size for grid (16 = 16x16, 32 = 32x32, etc...)"),
  );

  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateRows = `repeat(${resizeNum}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${resizeNum}, 1fr)`;
  buildGrid(resizeNum * resizeNum);
});

function buildGrid(squareNum) {
  for (let i = 0; i < squareNum; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.style.background = "pink";
    });
    gridContainer.appendChild(square);
  }
}

buildGrid(squareNum);
