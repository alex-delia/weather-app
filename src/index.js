import "./style.css";
import { displayWeather, changeUnit } from "./displayWeather";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const locationForm = document.querySelector('.locationForm');
const degreeUnit = document.querySelector('.degreeUnit');

async function main() {
    locationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        displayWeather();
    });

    degreeUnit.addEventListener('click', changeUnit);
}

main();

