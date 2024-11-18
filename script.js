// URL-адреса JSON
const requestURL = 'https://semegenkep.github.io/json/example.json';

// Створення запиту
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// Обробка відповіді
request.onload = function () {
    const superHeroes = request.response;
    createPageStructure(); // Створення основної структури сторінки
    populateHeader(superHeroes);
    showHeroes(superHeroes);
};

// Функція для створення основної структури сторінки
function createPageStructure() {
    const body = document.querySelector('body');

    // Динамічно створюємо header
    const header = document.createElement('header');
    body.appendChild(header);

    // Динамічно створюємо section
    const section = document.createElement('section');
    body.appendChild(section);
}

// Функція для заповнення заголовка
function populateHeader(data) {
    const header = document.querySelector('header');

    const h1 = document.createElement('h1');
    h1.textContent = data.squadName;
    header.appendChild(h1);

    const para = document.createElement('p');
    para.textContent = `City: ${data.homeTown} // Formed: ${data.formed}`;
    header.appendChild(para);
}

// Функція для створення карток героїв
function showHeroes(data) {
    const section = document.querySelector('section');
    const heroes = data.members;

    heroes.forEach(hero => {
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = hero.name;

        const para1 = document.createElement('p');
        para1.textContent = `Secret Identity: ${hero.secretIdentity}`;

        const para2 = document.createElement('p');
        para2.textContent = `Age: ${hero.age}`;

        const para3 = document.createElement('p');
        para3.textContent = 'Superpowers:';
        const list = document.createElement('ul');
        hero.powers.forEach(power => {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            list.appendChild(listItem);
        });

        article.appendChild(h2);
        article.appendChild(para1);
        article.appendChild(para2);
        article.appendChild(para3);
        article.appendChild(list);

        section.appendChild(article);
    });
}
