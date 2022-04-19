import { showDogs } from "./show_dogs.js"
import { dogs } from './dogs_list.js';
import { lifespanDropdown } from "./lifespan_dropdown.js";
import { sortButton } from "./sort_button.js";
import { newDogButton } from "./new_dog.js";

let dogBreedCount = 0;

function countDogs() {
    if (dogBreedCount < dogs.length) {
        dogBreedCount++;
        return countDogs();
    } else {
        return `Dog breed count is ${dogBreedCount}`;
    }
}

alert((() => countDogs())());

const helperDiv = document.createElement('div');
const container = document.getElementById('show_dogs')
const navBar = document.getElementById('navBar')
navBar.style = "padding: 15px; display: flex; align-items: center; justify-content: space-between;"
const row = document.createElement('div')
row.id = 'dogs';
row.className = 'row wrapper'
showDogs(dogs, row);

navBar.appendChild(lifespanDropdown);
helperDiv.appendChild(sortButton);
helperDiv.appendChild(newDogButton);
navBar.appendChild(helperDiv);


container.appendChild(row);

export { row }