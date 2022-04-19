import { dogs } from './dogs_list.js';

const url_string = window.location.href;
const url = new URL(url_string);
const dogId = url.searchParams.get("id");

const dog = dogs.find((element) => element.id == dogId)

const container = document.createElement('div')
container.className = 'container'

document.body.appendChild(container)

if (dog != undefined) {
    const coverImage = document.createElement('img')
    coverImage.classList.add('img-fluid')
    coverImage.classList.add('w-100')
    coverImage.alt = 'Dog image'
    coverImage.src = dog.url

    container.appendChild(coverImage)

    const title = document.createElement('h1');
    title.textContent = dog.name;
    title.style = 'font-weight: bold; margin-top: 20px;'

    container.appendChild(title)

    const description = document.createElement('p')
    description.textContent = dog.temperament
    description.style = 'font-size: 16pt;'

    container.appendChild(description)

    if (dog.origin != null && dog.origin != undefined) {
        const origin = document.createElement('p');
        origin.textContent = `Origin: ${dog.origin}`
        origin.style = 'font-size: 14pt;'

        container.appendChild(origin)
    }

    const lifespan = document.createElement('p');
    lifespan.textContent = `Lifespan: ${dog.life_span}`
    lifespan.style = 'font-size: 14pt;'

    container.appendChild(lifespan)

    if (dog.breed_group != null && dog.breed_group != undefined) {
        const bredGroup = document.createElement('p');
        bredGroup.textContent = `Breed group: ${dog.breed_group}`
        bredGroup.style = 'font-size: 14pt;'

        container.appendChild(bredGroup)
    }

    if (dog.bred_for != null && dog.bred_for != undefined) {
        const bredFor = document.createElement('p');
        bredFor.textContent = `Bred for: ${dog.bred_for}`
        bredFor.style = 'font-size: 14pt;'

        container.appendChild(bredFor)
    }

    const link = document.createElement('button')
    link.className = 'btn btn-success mt-auto'
    link.innerText = 'Get Image Url'
    link.addEventListener('click', () => alert(dog.url))

    container.appendChild(link);
} else {
    container.style = 'text-align: center;'
    container.innerHTML = '<h2> Can\'t get dogs data</h2>';
}