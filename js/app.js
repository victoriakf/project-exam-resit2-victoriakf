let searchParam = location.search.split('=').pop();

const access_key = 'K-HROYBtEk-hEcaCtWlS6oG--OMPLNRQA4Oz6qp-x0E';

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=4`;
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=4`;

const gallery = document.querySelector('.gallery');

let currentImage = 0;
let allImages; // this will store all the images

const getImages = () => {
    fetch(random_photo_url)
    .then(res => res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages);
    });
}

const searchImages = () => {
    fetch(search_photo_url)
    .then(res => res.json())
    .then(data => {
        allImages = data.results;
        makeImages(allImages);
    });
}

const makeImages = (data) => {
    data.forEach((item, index) => {

        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';

        gallery.appendChild(img);

        // popup image

        img.addEventListener('click', () => {
            currentImage = index;
            showPopup(item);
        })

    })
}

if(searchParam == ''){
    getImages();
} else{
    searchImages();
}