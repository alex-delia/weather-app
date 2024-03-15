const key = 'c779b12f7884479c9d911559241503';

async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`);
        const locationData = await response.json();

        const city = locationData.location.name;
        const country = locationData.location.country;
        const region = locationData.location.region;
        const tempC = locationData.current.temp_c;
        const tempF = locationData.current.temp_f;

        return { city, country, region, tempC, tempF };

    } catch (err) {
        console.error(err);
    }
}

export { getWeather };