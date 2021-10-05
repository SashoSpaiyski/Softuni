function attachEventsListeners() {
    const main = document.getElementsByTagName('main')[0];
    main.addEventListener('click', convert);

    main.querySelector('#days').value = '';
    main.querySelector('#hours').value = '';
    main.querySelector('#minutes').value = '';
    main.querySelector('#seconds').value = '';

    function convert(ev) {
        if (ev.target.type == 'button') {
            if (ev.target.id == 'daysBtn') {
                let days = Number(main.querySelector('#days').value);
                main.querySelector('#hours').value = days * 24;
                main.querySelector('#minutes').value = days * 24 * 60;
                main.querySelector('#seconds').value = days * 24 * 60 * 60;
            } else if (ev.target.id == 'hoursBtn') {
                let hours = Number(main.querySelector('#hours').value);
                main.querySelector('#days').value = hours / 24;
                main.querySelector('#minutes').value = hours * 60;
                main.querySelector('#seconds').value = hours * 60 * 60;
            } else if (ev.target.id == 'minutesBtn') {
                let minutes = Number(main.querySelector('#minutes').value);
                main.querySelector('#hours').value = minutes / 60;
                main.querySelector('#days').value = minutes * 24 * 60;
                main.querySelector('#seconds').value = minutes * 60;
            } else if (ev.target.id == 'secondsBtn') {
                let seconds = Number(main.querySelector('#seconds').value);
                main.querySelector('#hours').value = seconds / 60 / 60;
                main.querySelector('#minutes').value = seconds / 60;
                main.querySelector('#days').value = seconds / 60 / 60 / 24;
            }
        }
    }
}