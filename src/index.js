// write your code here

// load up the dom
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
    //fetch ramen data
function fetchRamen() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(getAllRamen)
}

function getAllRamen(ramenArr) {
    ramenArr.forEach(getRamen)
}

//display images to DOM, append images to div
function getRamen(ramenObj) {
    const ramenMenu = document.querySelector('#ramen-menu')
    const images = document.createElement('img')
    images.setAttribute('src', ramenObj.image);
    ramenMenu.append(images)

    // event listener on click for images
    ramenImg.addEventListener('click', () => {
        const image = document.querySelector('.detail-image')
        image.setAttribute('src', ramenObj.image);
        image.setAttribute('alt', ramenObj.name);

        const ramenName = document.querySelector('.name')
        ramenName.textContent = ramenObj.name

        const ramenResta = document.querySelector('.restaurant')
        ramenResta.textContent = ramenObj.restaurant

        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.textContent = ramenObj.rating

        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.textContent = ramenObj.comment
    })
}

//add new ramen from
function addRamenForm() {
    const newRamenForm = document.querySelector('#new-ramen')

    newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // create new ramen object
    const newRamen = {}
    newRamen.name = document.querySelector('#new-name').value
    newRamen.restaurant = document.querySelector('#new-restaurant').value
    newRamen.image = document.querySelector('#new-image').value
    newRamen.rating = document.querySelector('#new-rating').value
    newRamen.comment = document.querySelector('#new-comment').value

    // display new ramen in #ramen-menu
    const newRamenCard = document.createElement('img')
    newRamenCard.src = newRamen.image
    ramenMenu.append(newRamenCard)
    })
}

fetchRamen()
addRamenForm()
})
