const arrows = document.querySelectorAll(".fa-arrow-right");

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    const input = arrow.previousElementSibling;
    const parent = arrow.parentElement;
    const nextDiv = parent.nextElementSibling;
    console.log(nextDiv);
    if (input.value !== "") {
      parent.classList.add("innactive");
      parent.classList.remove("active");
      nextDiv.classList.remove("innactive")
      nextDiv.classList.add("active")
    }
  });
});
