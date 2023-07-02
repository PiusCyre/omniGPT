const menuBtn = document.getElementById("menu-btn");

const exitBtn = document.getElementById("exit-btn");

const navbar = document.querySelector(".navbar");

function idanMove() {
  navbar.classList.add("active");
}

const idanMoveOut = () => {
  navbar.classList.remove("active");
};

menuBtn.addEventListener("click", idanMove);

exitBtn.addEventListener("click", idanMoveOut);
