const arrows = document.querySelectorAll(".fa-arrow-right");

function animatedForm() {
  const input = this.previousElementSibling;
  const parent = this.parentElement;
  const nextDiv = parent.nextElementSibling;

  if (input.value !== "") {
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nextDiv.classList.remove("innactive")
    nextDiv.classList.add("active")
  }
}

arrows.forEach((arrow) => arrow.addEventListener('click', animatedForm));
