function handleDragStart() {
  this.classList.add("dragging");
}

function handleDragEnd() {
  this.classList.remove("dragging");
}

function addElement() {

  const parentSide = event.target.closest('div').parentNode;

  let element = document.createElement('div');
  var p = document.createElement("p");
  p.textContent = "Pick me!";
  element.appendChild(p);
  element.setAttribute('draggable', true);
  element.classList.add("draggable-element");

  parentSide.insertBefore(element, parentSide.firstElementChild.nextSibling);

  draggableElements();

}

function draggableElements() {
  const draggable = document.querySelectorAll(".draggable-element");
  draggable.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });
};
draggableElements();

const sides = document.querySelectorAll(".side")
sides.forEach((side) => {
  side.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    side.appendChild(draggable);
  });
});

const addButtons = document.querySelectorAll(".fas");
addButtons.forEach((btn) => {btn.addEventListener('click', addElement)});

