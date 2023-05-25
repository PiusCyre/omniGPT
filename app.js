const menuBtn = document.getElementById("menu-btn");

const exitBtn = document.getElementById("exit-btn");

const navbar = document.querySelector(".navbar");

function idanMove() {
  navbar.classList.add("active");
  // navbar.style.transform = "translateX(0%)";
}

const idanMoveOut = () => {
  navbar.classList.remove("active");
};

menuBtn.addEventListener("click", idanMove);

exitBtn.addEventListener("click", idanMoveOut);
