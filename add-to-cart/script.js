const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function renderPlates(items = [], itemsList) {

  itemsList.innerHTML = items.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.checked ? 'checked' : ''} />
        <label for="item${i}">${plate.name}</label>
      </li>
    `;
  }).join('');
}

function createPlate(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    name: text,
    checked: false
  }
  items.push(item);
  renderPlates(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

addItems.addEventListener('submit', createPlate);

renderPlates(items, itemsList);
