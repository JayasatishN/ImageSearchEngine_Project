const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

let page = 1;
let query = "";

form.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    query = input.value.trim();
    resultsContainer.innerHTML = '';
    searchImages();
});

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        page++;
        searchImages();
    }
});

function searchImages() {
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=YOUR_ACCESS_KEY`)
        .then(res => res.json())
        .then(data => {
            displayImages(data.results);
            if (page === 1) {
                saveSearchToDatabase(query, data.total);
            }
        });
}

function displayImages(images) {
    images.forEach((img) => {
        const image = document.createElement('img');
        image.src = img.urls.small;
        image.alt = img.alt_description || 'Image';
        image.className = 'result-image';
        resultsContainer.appendChild(image);
    });
}

function saveSearchToDatabase(query, resultCount) {
    fetch('SearchHistoryServlet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `query=${encodeURIComponent(query)}&resultCount=${resultCount}`,
    });
}
