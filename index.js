//create entry to DOM
//add variables to call from html
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

    async function getNewJoke() {
        const joke = await fetchJoke();
        displayJoke(joke);
    }

    newJokeButton.addEventListener('click', getNewJoke);

    getNewJoke();

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

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
