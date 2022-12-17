let searchParam = location.search.split("=").pop();

const access_key = "UnS2DtcJL5i-7OAEgvtlR71NVtx5Grm0bTy0Cbjl_v8"; // new

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=4`;
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=4`;
`https://api.unsplash.com/search/photos?client_id=K-HROYBtEk-hEcaCtWlS6oG--OMPLNRQA4Oz6qp-x0E&query=sport&per_page=4`;

console.log("searchParam :", searchParam);
const gallery = document.querySelector(".gallery");
fetch(search_photo_url)
  .then((response) => response.json())
  .then((data) => {
    let i = 0;
    for (let img of data.results) {
      gallery.innerHTML += `<a href="/image.html?imgnumber=${i}&search=${searchParam}" 
        ><img src="${img.urls.thumb}" class="gallery-img" alt="" />
      </a>`;

      console.log(img.urls);
      i++;
    }
  });

/*
let currentImage = 0;
let allImages; // this will store all the images

const getImages = () => {
  fetch(random_photo_url)
    .then((res) => res.json())
    .then((data) => {
      allImages = data;
      makeImages(allImages);
    });
};

const searchImages = () => {
  fetch(search_photo_url)
    .then((res) => res.json())
    .then((data) => {
      allImages = data.results;
      makeImages(allImages);
    });
};

const makeImages = (data) => {
  data.forEach((item, index) => {
    let img = document.createElement("img");
    img.src = item.urls.regular;
    img.className = "gallery-img";

    gallery.appendChild(img);

    // popup image

    img.addEventListener("click", () => {
      currentImage = index;
      showPopup(item);
    });
  });
};

if (searchParam == "") {
  getImages();
} else {
  searchImages();
}

*/
