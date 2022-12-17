const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let searchParam = params["search"];
console.log("params :", searchParam);

const access_key = "UnS2DtcJL5i-7OAEgvtlR71NVtx5Grm0bTy0Cbjl_v8"; // new

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=4`;
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=4`;

const gallery = document.querySelector(".gallery");

fetch(search_photo_url)
  .then((response) => response.json())
  .then((data) => {
    gallery.innerHTML = ` <img src="${
      data.results[params["imgnumber"]].urls.thumb
    }" class="chosen-img" />  

<div class="info">
  <h1 class="title">${data.results[params["imgnumber"]].alt_description}</h1>
  <h2 class="photographer"><a href="./user.html?imgnumber=${
    params["imgnumber"]
  }&search=${searchParam}&username=${
      data.results[params["imgnumber"]].user.username
    }">${data.results[params["imgnumber"]].user.name}</a></h2>
  <p class="location">Location taken</p>
</div>`;
  });
