let movies = [];

const addMovieBtn = document.getElementById('add-movie-btn');
const movieName = document.getElementById('movie-name');
const movieList = document.getElementById('movie-list');

function addMovie() {
    const movie = movieName.value.trim();

    // do nothing if field is empty
    if (movie === '') {
        alert("Please enter a movie!");
        return;
    }

    // add movie to the array and prepare the input field for display
    movies.push(movie);
    movieName.value = '';
    displayMovies();
}

function displayMovies() {
    // clear current list
    movieList.innerHTML = '';

    // loop through movies array and add to the list
    for (let i = 0; i < movies.length; ++i) {
        const listItem = document.createElement('li');
        listItem.classList.add('collection-item');
        listItem.innerHTML = `<span class="movie-title">${movies[i]}</span><p class="remove-btn" onclick="removeMovie(${i})">Watched</p>`;
        movieList.appendChild(listItem);
    }
}

function removeMovie(index) {
    movies.splice(index, 1);
    displayMovies();
}

addMovieBtn.addEventListener('click', addMovie);
