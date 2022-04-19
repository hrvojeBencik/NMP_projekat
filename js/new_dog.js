import { showDogs } from "./show_dogs.js"
import { dogs } from './dogs_list.js';
import { row } from './app.js';

const addIcon = '<i class="fa-solid fa-plus"></i>';

const newDogButton = document.createElement('button');
newDogButton.className = 'btn btn-primary me-4';
newDogButton.style = 'float: right;'
newDogButton.innerHTML = addIcon + ' Add new dog breed';
newDogButton.addEventListener('click', () => {
    addNewDog(newDogForm());
});

function newDogForm() {
    let dogBreed = prompt('Please enter dogs breed');
    let lifespan = prompt('Please enter dogs lifespan');
    let origin = prompt('Please enter dogs origin');
    let temperament = prompt('Please enter dogs temperament');
    let imageUrl = prompt('Please add dogs image URL');
    const dogId = ++dogs[dogs.length - 1].id;

    console.log(dogId);

    const dog = {
        id: dogId,
        life_span: lifespan,
        name: dogBreed,
        origin: origin,
        temperament: temperament,
        url: imageUrl
    };

    return dog;
}

function addNewDog(dog) {
    if (dog.name != null && dog.life_span != null && dog.origin != null && dog.temperament != null && dog.url != null) {
        dogs.push(dog);
        row.innerHTML = '';
        showDogs(dogs, row);
    }
}

export { newDogButton }