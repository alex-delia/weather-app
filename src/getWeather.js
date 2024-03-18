const key = 'c779b12f7884479c9d911559241503';

async function getWeather(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`);

        const locationData = await response.json();

        if (!response.ok) {
            throw locationData.error
        }

        const city = locationData.location.name;
        const country = locationData.location.country;
        const region = locationData.location.region;
        const condition = locationData.current.condition.text;
        const tempC = locationData.current.temp_c;
        const tempF = locationData.current.temp_f;

        return { city, country, region, condition, tempC, tempF };

    } catch (err) {
        console.warn('Error', err);
    }
}

export { getWeather };