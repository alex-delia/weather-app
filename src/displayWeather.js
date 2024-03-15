import { getWeather } from "./getWeather";

const infoContainer = document.querySelector('.weatherInfoContainer');
const userLocationInput = document.querySelector('#userLocation');

async function displayWeather() {
    const userLocationValue = userLocationInput.value;

    const weatherData = await getWeather(userLocationValue);

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

    const tempC = document.createElement('h4');
    tempC.innerHTML = `${weatherData.tempC} &#8451;`;
    infoContainer.append(tempC);

    const tempF = document.createElement('h4');
    tempF.innerHTML = `${weatherData.tempF} &#8457;`;
    infoContainer.append(tempF)

}

export { displayWeather };