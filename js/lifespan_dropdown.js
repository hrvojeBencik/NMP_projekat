import { dogs } from './dogs_list.js';
import { showDogs } from "./show_dogs.js"
import { row } from './app.js';

let newDogList = []

const lifespanDropdown = document.createElement('div');
lifespanDropdown.className = 'dropdown';

const lifespanButton = document.createElement('button');
lifespanButton.className = 'btn btn-primary dropdown-toggle';
lifespanButton.setAttribute('data-bs-toggle', 'dropdown')
lifespanButton.id = 'dropdownMenuButton1'
lifespanButton.type = 'button';
lifespanButton.ariaExpanded = 'false';
lifespanButton.textContent = 'Lifespan'

const lifespanList = [
    'Clear filter',
    '10 - 12 years',
    '10 - 13 years',
    '12 - 14 years',
    '12 - 15 years',
]

const lifespanMenu = document.createElement('ul');
lifespanMenu.className = 'dropdown-menu';
lifespanMenu.setAttribute('aria-labelledby', 'dropdownMenuButton1');
lifespanList.forEach((item) => {
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('dropdown-item');
    link.textContent = item;

    menuItem.addEventListener('click', () => {
        if (item === 'Clear filter') {
            row.innerHTML = '';
            showDogs(dogs, row);
            newDogList = [];
        } else {
            row.innerHTML = '';
            newDogList = dogs.filter((element) => element.life_span == item)
            showDogs(newDogList, row);
        }
    });

    menuItem.appendChild(link);
    lifespanMenu.appendChild(menuItem)
});

lifespanDropdown.appendChild(lifespanButton);
lifespanDropdown.appendChild(lifespanMenu)

export { lifespanDropdown, newDogList }