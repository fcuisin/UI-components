const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function createPlate(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    name: text,
    checked: false
  }
  items.push(item);
  this.reset();
}

addItems.addEventListener('submit', createPlate);
