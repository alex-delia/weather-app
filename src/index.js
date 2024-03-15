import "./style.css";
import { displayWeather } from "./displayWeather";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const locationForm = document.querySelector('.locationForm');

async function main() {
    locationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        displayWeather();
    });
}

main();

