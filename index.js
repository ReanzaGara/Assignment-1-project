//Requirements for project: 
//have HTML, CSS, JS
//single page
//3 eventListeners
//use of one of the array methods (map, forEach, filter)

//create entry to DOM
//add variables to call from html using id
document.addEventListener("DOMContentLoaded", () => {
    const jokeList = document.getElementById('joke-list');
    const searchInput = document.getElementById('search');
    const toggleThemeButton = document.getElementById('toggle-theme');
    const newJokeButton = document.getElementById('new-joke');
//add way to get api using fetch
    function fetchJoke() {
        return fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json());
}
//store the joke somewhere
    function displayJoke(joke) {
        const jokeItem = document.createElement('p');
        jokeItem.textContent = joke.value;
        jokeList.appendChild(jokeItem);
    }
//make it so you can get new jokes
//add another eventListener
    function getNewJoke() {
        fetchJoke().then(function(joke) {
            displayJoke(joke);
        });
    }
    newJokeButton.addEventListener('click', getNewJoke);
    getNewJoke();
//make darkmode avaliable with eventListener
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
//make search by term avaliable
//make it all lowercase
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const jokes = Array.from(document.querySelectorAll('.joke p'));
        jokes.forEach(joke => {
            if (joke.textContent.toLowerCase().includes(searchTerm)) {
                joke.parentElement.style.display = 'block';
            } else {
                joke.parentElement.style.display = 'none';
            }
        });
    });
});
