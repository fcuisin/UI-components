function handleDragStart() {
  this.classList.add("dragging");
}

function handleDragEnd() {
  this.classList.remove("dragging");
}

const draggable = document.querySelectorAll(".draggable-element");
const sides = document.querySelectorAll(".side")

draggable.forEach((item) => {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragend', handleDragEnd);
});

sides.forEach((side) => {
  side.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    side.appendChild(draggable);
  });
});
