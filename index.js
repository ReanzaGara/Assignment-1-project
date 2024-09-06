document.addEventListener("DOMContentLoaded", () => {
    const jokeList = document.getElementById('joke-list');
    const searchInput = document.getElementById('search');
    const toggleThemeButton = document.getElementById('toggle-theme');
    const newJokeButton = document.getElementById('new-joke');

    async function fetchJoke() {
        const response = fetch('https://api.chucknorris.io/jokes/random');
        const joke = response.json();
        return joke;
    }

    function displayJoke(joke) {
        const jokeItem = document.createElement('div');
        jokeItem.classList.add('joke');
        jokeItem.innerHTML = `
            <p>${joke.value}</p>
        `;
        jokeList.appendChild(jokeItem);
    }

    async function getNewJoke() {
        const joke = await fetchJoke();
        displayJoke(joke);
    }

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

    newJokeButton.addEventListener('click', getNewJoke);

    getNewJoke();
});
