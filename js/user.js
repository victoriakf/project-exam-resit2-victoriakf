const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let searchParam = params["search"];
let username = params["username"];
console.log("params :", params);

const access_key = "UnS2DtcJL5i-7OAEgvtlR71NVtx5Grm0bTy0Cbjl_v8"; // new

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=4`;
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=4`;
const user_photos_url = `https://api.unsplash.com/users/${username}/photos?client_id=${access_key}`;

const gallery = document.querySelector(".main");
const user_gallery = document.querySelector(".user-gallery");
fetch(search_photo_url)
  .then((response) => response.json())
  .then((data) => {
    gallery.innerHTML = `<img src="${
      data.results[params["imgnumber"]].user.profile_image.large
    }" class="user-img" />
      <div class="info">
        <h1 class="photographer">${
          data.results[params["imgnumber"]].user.name
        }</h1>
      </div>`;
  });

fetch(search_photo_url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    let i = 0;
    for (let img of data.results) {
      gallery.innerHTML += `<div><a href="./image.html?imgnumber=${i}&search=${searchParam}" 
        ><img src="${img.urls.thumb}" class="gallery-img" alt="" />
      </a></div>`;

      console.log(img.urls);
      i++;
    }
  });
