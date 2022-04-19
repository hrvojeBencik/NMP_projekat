const dogCard = dog => {
    const card = document.createElement('div');
    card.className = 'card col-md-6 col-lg-4 col-sm-12 mt-2';

    const cardImage = document.createElement('img');
    cardImage.src = dog.url;
    cardImage.className = 'card-img-top';
    cardImage.style = 'height: 200px; object-fit: contain;'

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body d-flex flex-column'

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title'
    cardTitle.textContent = dog.name

    const cardDescription = document.createElement('p')
    cardDescription.className = 'card-text'
    cardDescription.innerText = dog.temperament

    const link = document.createElement('a')
    link.className = 'btn btn-success mt-auto'
    link.innerText = 'Find out more'
    link.href = `/dog_page.html?id=${dog.id}`

    card.appendChild(cardImage)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardDescription)
    cardBody.appendChild(link)
    return card;
}

const showDogs = (dogList, row) => dogList.forEach((dog) => {
    row.appendChild(dogCard(dog))
});

export { showDogs }