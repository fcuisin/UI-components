const panels = document.querySelectorAll(".panel");

console.log(panels);

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive() {
  console.log("yes");
  this.classList.toggle("active");
}

panels.forEach(panel => {

  panel.addEventListener('click', toggleOpen);

});

panels.forEach(panel => {

  panel.addEventListener('transitionend', toggleActive);

});
