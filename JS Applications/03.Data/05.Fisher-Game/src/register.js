window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('.email > span:nth-child(1)').textContent = userData.email.split('@')[0];
    } else {
        document.getElementById('user').style.display = 'none';
    }

    document.querySelector('form').addEventListener('submit', register);
})

async function register(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    try {
        if (email == '' || password == '') {
            return alert('All field must be filled!');
        } else if (password != rePass) {
            return alert("Passwords don't match!");
        }

        const response = await fetch('http://localhost:3030/users/register', { 
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        if (!response.ok) {
            const error = await response.json();
            return alert(error.message);
        }

        const data = await response.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = '/05.Fisher-Game/index.html';

        alert('Registered successfully!');
        event.target.reset();
    }
    catch (error) {
        alert(error.message);
    }
}