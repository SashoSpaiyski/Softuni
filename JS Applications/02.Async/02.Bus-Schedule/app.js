function solve() {
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');
    const info = document.querySelector('#info');

    let stopId = {
        next: 'depot'
    }

    async function depart() {
        departBtn.disabled = true;
        const url = 'http://localhost:3030/jsonstore/bus/schedule/' + stopId.next;
        info.textContent='Loading...';
        try {
            const res = await fetch(url);

            if (res.status != 200) {
                throw new Error();
            }
            console.log(stopId)
            stopId = await res.json();
            console.log(stopId)

            info.textContent = `Next stop ${stopId.name}`;
            arriveBtn.disabled = false;
        } catch (error) {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            info.textContent = 'Error';
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${stopId.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();