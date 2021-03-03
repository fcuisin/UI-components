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

function toggle(e) {
  if(!e.target.matches('input')) return;
  const element = e.target;
  const index = element.dataset.index;
  items[index].checked = !items[index].checked;
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', createPlate);
itemsList.addEventListener('click', toggle);

renderPlates(items, itemsList);
