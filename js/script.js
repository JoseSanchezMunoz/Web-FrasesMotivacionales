/*Nota: todas las imagenes estaran en resolucion 220x290 px*/
const quotes = [
    {
        text: "El éxito es aprender a ir de fracaso en fracaso sin desesperarse.",
        author: "Winston Churchill",
        image: "img/winston_churchill.jpg" //agregado
    },
    {
        text: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        author: "Vidal Sassoon",
        image: "img/vidal_sassoon.jpg" //agregado
    },
    {
        text: "La motivación nos impulsa a comenzar y el hábito nos permite continuar.",
        author: "Jim Ryun",
        image: "img/jim_ryun.jpg" //agregado
    },
    {
        text: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
        author: "Albert Schweitzer",
        image: "img/albert_schweitzer.jpg" //agregado
    },
    {
        text: "La única forma de hacer un gran trabajo es amar lo que haces.",
        author: "Steve Jobs",
        image: "img/steve_jobs.jpg" //agregado
    },
    {
        text: "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
        author: "Jack Canfield",
        image: "img/jack_canfield.jpg" //agregado
    },
    {
        text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        author: "Robert Collier",
        image: "img/robert_collier.jpg" //agregado
    },
    {
        text: "El único límite para nuestros logros de mañana serán nuestras dudas de hoy.",
        author: "Franklin D. Roosevelt",
        image: "img/franklin_roosevelt.jpg" //agregado
    },
    {
        text: "Cree en ti mismo y todo será posible.",
        author: "Albert Einstein",
        image: "img/albert_einstein.jpg" //agregado
    },
    {
        text: "No tienes que ser grande para empezar ... pero tienes que empezar para ser grande.",
        author: "Zig Ziglar",
        image: "img/zig_ziglar.jpg" //agregado
    },
    {
        text: "El mejor momento para plantar un árbol fue hace veinte años. El segundo mejor momento es ahora.",
        author: "Proverbio chino",
        image: "img/proverbio_chino.jpg" //agregado
    }
];
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");
const authorElement = document.getElementById("author");
const authorImage = document.getElementById("author-image");
const generateButton = document.getElementById("generate-button");

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote.text;
    authorElement.textContent = `- ${randomQuote.author}`;
    authorImage.src = randomQuote.image;
    authorImage.alt = randomQuote.author;
}

generateButton.addEventListener("click", displayQuote);
displayQuote(); // Muestra una cita al cargar la página
