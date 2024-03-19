import { getWeather } from "./getWeather";

const infoContainer = document.querySelector('.weatherInfoContainer');
const userLocationInput = document.querySelector('#userLocation');
const degreeUnit = document.querySelector('.degreeUnit');

let weatherData = null;

async function displayWeather() {
    const userLocationValue = userLocationInput.value;

    weatherData = await getWeather(userLocationValue);

    while (infoContainer.firstChild) {
        infoContainer.firstChild.remove();
    }

    if (Object.hasOwn(weatherData, 'error')) {
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = weatherData.error.message;
        infoContainer.append(errorMessage);
        return;
    }

    const temp = document.createElement('h2');
    temp.classList.add('temp');
    if (degreeUnit.dataset.unit === 'celsius') {
        temp.innerHTML = `${weatherData.tempC} &#8451;`;
    } else {
        temp.innerHTML = `${weatherData.tempF} &#8457;`;
    }
    infoContainer.append(temp);

    const condition = document.createElement('h3');
    condition.textContent = weatherData.condition;
    infoContainer.append(condition);

    const location = document.createElement('div');
    location.classList.add('location');

    const locationName = document.createElement('h4');
    locationName.textContent = `${weatherData.city}, ${weatherData.region}`;
    location.append(locationName);

    const locationCountry = document.createElement('h5');
    locationCountry.textContent = weatherData.country;
    location.append(locationCountry);

    infoContainer.append(location);
}

function changeUnit() {
    const temp = document.querySelector('.temp');

    if (degreeUnit.dataset.unit === 'celsius') {
        degreeUnit.innerHTML = '&#8457;';
        degreeUnit.dataset.unit = 'farenheit';
        if (weatherData) {
            temp.innerHTML = `${weatherData.tempF} &#8457;`;
        }
    } else {
        degreeUnit.innerHTML = '&#8451;';
        degreeUnit.dataset.unit = 'celsius';
        if (weatherData) {
            temp.innerHTML = `${weatherData.tempC} &#8451;`;
        }
    }
}

export { displayWeather, changeUnit };