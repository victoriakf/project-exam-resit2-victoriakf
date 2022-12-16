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




/*
const form = document.querySelector('.search-container');
form.addEventListener('submit', Submitsearch);
const more = document.querySelector('.load-more');
const howmanyfound=document.querySelector('.howmanyfound'); 

let numberofresultsfound;
let page = 1;
let searchparam;



more.addEventListener('click', () => {
	page += 1;
	fetchResults(searchparam);
});



function pagination(totalPages) {
	more.classList.remove('hidden');
	if (page >= totalPages) {
		more.classList.add('hidden');
	}

	
}

async function fetchResults(searchQuery) {
	
	try {
		const results = await searchImages(searchparam);
		pagination(results.total_pages);
		console.log(results);
		displayResults(results);
	} catch(err) {
		console.log(err);
		alert('I got an error and Failed to search Unsplash');
	}
	
} 

function Submitsearch(event) {
	event.preventDefault();
	page = 1;
	const inputValue = document.querySelector('.search-input').value;
	searchparam = inputValue.trim();
	fetchResults(searchparam);
}

async function searchImages(searchparam) {
	const endpoint = `https://api.unsplash.com/search/photos?query=${searchparam}&per_page=10&page=${page}&client_id=${access_key}`;
	const response = await fetch(endpoint);
	if (!response.ok) {
		throw Error(response.statusText);
	}
	const json = await response.json();
	return json;
}

function displayResults(json) {
	const gallery = document.querySelector('.gallery');
	gallery.textContent = '';
	json.results.forEach(result => {
		const url = result.urls.small;
		const owner = result.user.name;
        const imagelink = result.links.html;
		const ownerprofile = result.user.links.html;
		gallery.insertAdjacentHTML(
			'beforeend',
			`<div class="singleimage"><a href="${imagelink}" target="_blank" ><img src="${url}"/>
            
            </a>
            <a href="${ownerprofile}">Photo by ${owner}</a>
			
			</div>`
		);	
	});

    //used when you want to display the count
	numberofresultsfound = json.total;
    howmanyfound.textContent = `We found about ${numberofresultsfound} images`;
	
};
*/

