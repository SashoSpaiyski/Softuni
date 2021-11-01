function attachEvents() {
    const submitBtn = document.querySelector('#submit');
    submitBtn.addEventListener('click', displayForecast);
    const forecastSection = document.querySelector('#forecast');
    const currentSection = forecastSection.querySelector('#current');
    const upcomingSection = forecastSection.querySelector('#upcoming');
    attachErrorDiv();

    const weatherSymbols = {
        Sunny: '&#x2600;',
        'Partly sunny': '&#x26C5;',
        Overcast: '&#x2601;',
        Rain: '&#x2614;',
        Degrees: '&#176;',
    }

    async function displayForecast() {
        submitBtn.value = 'Loading...';
        errorDiv.style.display = 'none';
        forecastSection.style.display = 'none';
        currentSection.replaceChildren();
        upcomingSection.replaceChildren();

        try {
            const locationCode = await getLocationCode();
            const [current, upcoming] = await Promise.all([
                getCurrentForecast(locationCode),
                getUpcomingForecast(locationCode)
            ]);

            currentSection.innerHTML += '<div class="label">Current conditions</div>';
            const currentDiv = document.createElement('div');
            currentDiv.classList.add('forecasts');
            currentDiv.innerHTML = `<span class="condition symbol">${weatherSymbols[current.forecast.condition]}</span>
            <span class="condition">
            <span class="forecast-data">${current.name}</span>
            <span class="forecast-data">${current.forecast.low}°/${current.forecast.high}°</span>
            <span class="forecast-data">${current.forecast.condition}</span>
            </span>`
            currentSection.appendChild(currentDiv);

            upcomingSection.innerHTML += '<div class="label">Three-day forecast</div>';
            const upcomingDiv = document.createElement('div');
            upcomingDiv.classList.add('forecast-info');
            Object.values(upcoming.forecast).forEach(v => {
                const upcomingSpan = document.createElement('span');
                upcomingSpan.classList.add('upcoming');
                upcomingSpan.innerHTML = `<span class="symbol">${weatherSymbols[v.condition]}</span>
                <span class="forecast-data">${v.low}°/${v.high}°</span>
                <span class="forecast-data">${v.condition}</span>
                `
                upcomingDiv.appendChild(upcomingSpan);
            })
            upcomingSection.appendChild(upcomingDiv);

            forecastSection.style.display = '';
        } catch (error) {
            forecastSection.style.display = 'none';
            errorDiv.style.display = '';
        }
        submitBtn.value = 'Get Weather';
    }

    async function getLocationCode() {
        const url = 'http://localhost:3030/jsonstore/forecaster/locations';
        const locationName = document.querySelector('#location').value;

        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error();
        }

        const data = await res.json();

        const location = data.find(l => l.name === locationName);
        return location.code;
    }

    async function getCurrentForecast(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error();
        }

        const data = await res.json();

        return data;
    }

    async function getUpcomingForecast(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error();
        }

        const data = await res.json();

        return data;
    }

    function attachErrorDiv() {
        const errorDiv = document.createElement('div');
        errorDiv.id = 'errorDiv';
        errorDiv.textContent = 'Error';

        errorDiv.style.marginTop = '1em';
        errorDiv.style.fontSize = '1.5em';
        errorDiv.style.backgroundColor = 'aquamarine';
        errorDiv.style.fontWeight = '400';
        errorDiv.style.textAlign = 'center';
        errorDiv.style.display = 'none';

        document.querySelector('#content').appendChild(errorDiv);
    }
}

attachEvents();