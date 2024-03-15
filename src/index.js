import "./style.css";
import { getWeather } from './getWeather.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const body = document.querySelector('body');
const userLocation = document.querySelector('#userLocation');
const submitLocation = document.querySelector('#submitLocation');

async function main() {
    submitLocation.addEventListener('click', async () => {
        const location = userLocation.value;
        const currentWeather = await getWeather(location);
        console.log(currentWeather);
    });
}

main();

