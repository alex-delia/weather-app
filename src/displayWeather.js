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

    if (!weatherData) {
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = 'Invalid Location';
        infoContainer.append(errorMessage);
        return;
    }

    const locationName = document.createElement('h2');
    locationName.textContent = `${weatherData.city}, ${weatherData.region}`;
    infoContainer.append(locationName);

    const locationCountry = document.createElement('h3');
    locationCountry.textContent = weatherData.country;
    infoContainer.append(locationCountry);

    const condition = document.createElement('h4');
    condition.textContent = weatherData.condition;
    infoContainer.append(condition);

    const temp = document.createElement('h4');
    temp.classList.add('temp');
    if (degreeUnit.dataset.unit === 'celsius') {
        temp.innerHTML = `${weatherData.tempC} &#8451;`;
    } else {
        temp.innerHTML = `${weatherData.tempF} &#8457;`;
    }
    infoContainer.append(temp);
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