const access_key = 'UnS2DtcJL5i-7OAEgvtlR71NVtx5Grm0bTy0Cbjl_v8';
let searchParam = location.search.split('=').pop();

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;
const search_photo_url = `https://api.unsplash.com/search/photos/?client_id=${access_key}&query=${searchParam}&per_page=30`;


const gallery = document.querySelector('.gallery');

let allImages; //this will store all images

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
    })
}

if(searchParam == ''){
    getImages();
} else{
    searchImages();
}
