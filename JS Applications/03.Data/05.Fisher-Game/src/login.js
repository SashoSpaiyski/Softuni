<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData){
        document.getElementById('guest').style.display='none';
        document.querySelector('.email > span:nth-child(1)').textContent=userData.email.split('@')[0];
    } else{
        document.getElementById('user').style.display='none';
    }
    const form = document.querySelector('form');
    form.addEventListener('submit', onLogin)
})

async function onLogin(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if(!res.ok){
            const error=await res.json();
            throw new Error(error.message);
        }

        const data=await res.json();
        const userData={
            email: data.email,
            id: data._id,
            token: data.accessToken
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = '/05.Fisher-Game/index.html';
    } catch (err) {
        alert(err.message);
    }
=======
window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData){
        document.getElementById('guest').style.display='none';
        document.querySelector('.email > span:nth-child(1)').textContent=userData.email.split('@')[0];
    } else{
        document.getElementById('user').style.display='none';
    }
    const form = document.querySelector('form');
    form.addEventListener('submit', onLogin)
})

async function onLogin(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if(!res.ok){
            const error=await res.json();
            throw new Error(error.message);
        }

        const data=await res.json();
        const userData={
            email: data.email,
            id: data._id,
            token: data.accessToken
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = '/05.Fisher-Game/index.html';
    } catch (err) {
        alert(err.message);
    }
>>>>>>> b784f9252f16cdbfa9606cbc4e8408d538877fdf
}