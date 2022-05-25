let container = document.querySelector(".prog");
let all = document.querySelectorAll(".Pro");

window.onscroll = function () {
  if (window.scrollY >= (container.offsetTop-100)) {
    all.forEach((span) => {
      span.style.width = span.dataset.goal;
    });
  }
};
function resp() {
    document.getElementById("when").style.display = "block";
}