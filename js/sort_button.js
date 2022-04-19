import { showDogs } from "./show_dogs.js"
import { dogs } from './dogs_list.js';
import { row } from './app.js';
import { newDogList } from './lifespan_dropdown.js';


let isReverseSorted = false;

const sortDownIcon = '<i class="fa-solid fa-sort-down"></i>';
const sortUpIcon = '<i class="fa-solid fa-sort-up"></i>';

const sortButton = document.createElement('button');
sortButton.type = 'button';
sortButton.className = 'btn btn-light';
sortButton.style = 'float: right;'
sortButton.innerHTML = isReverseSorted ? sortDownIcon : sortUpIcon;
sortButton.addEventListener('click', () => {
    if (isReverseSorted) {
        row.innerHTML = '';
        let newList = []
        if (newDogList.length === 0) {
            newList = dogs.sort((a, b) => a.name.localeCompare(b.name))
        } else {
            newList = newDogList.sort((a, b) => a.name.localeCompare(b.name))
        }
        showDogs(newList, row);
        isReverseSorted = false;
    } else {
        row.innerHTML = '';
        let newList = []
        if (newDogList.length === 0) {
            newList = dogs.sort((a, b) => b.name.localeCompare(a.name));
        } else {
            newList = newDogList.sort((a, b) => b.name.localeCompare(a.name));
        }
        showDogs(newList, row);
        isReverseSorted = true;
    }
    sortButton.innerHTML = isReverseSorted ? sortDownIcon : sortUpIcon;

});

export { sortButton }