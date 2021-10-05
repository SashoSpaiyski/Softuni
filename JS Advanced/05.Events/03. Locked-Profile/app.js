function lockedProfile() {
    document.getElementById('main').addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON') {
            onToggle(ev);
        } else if (ev.target.tagName == 'INPUT' && ev.target.type == 'radio') {
            onLockToggle(ev);
        }
    }

    function onToggle(ev) {
        const button = ev.target;
        const profile = button.parentElement;
        const isLocked = profile.querySelector('input[type="radio"][value="lock"]').checked;

        if (!isLocked) {
            if (button.textContent == 'Show more') {
                profile.querySelector('div').style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                profile.querySelector('div').style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }

    function onLockToggle(ev) {
        const button = ev.target.parentElement.querySelector('button');

        if (ev.target.value == 'lock') {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
}
