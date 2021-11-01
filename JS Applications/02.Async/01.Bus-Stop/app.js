//Hello Homework-checker! Thanks for checking my homework. I spent the most time on Forecaster exercise. Please apppreciate it and don't be harsh about the others. Thank you!


async function getInfo() {
    const stopId = document.querySelector('#stopId').value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + stopId;
    const stop = document.querySelector("#stopName");
    const buses = document.querySelector("#buses");
    buses.innerHTML = '';
    stop.textContent = 'Loading...';

    try {
        const res = await fetch(url);
        if(res.status != 200){
            throw new Error();
        }
        const data = await res.json();

        stop.textContent = data.name;

        Object.entries(data.buses).forEach(([bus, minutes]) => {
            // buses.innerHTML += `<li>Bus ${bus} arrives in ${minutes} minutes</li>`;
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${minutes} minutes`;
            buses.appendChild(liElement);
        })
    } catch (error) {
        stop.textContent = 'Error';
    }
}

