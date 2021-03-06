<<<<<<< HEAD
let userData = null;

window.addEventListener('DOMContentLoaded', () => {
    loadData();

    userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
        document.querySelector('.email > span:nth-child(1)').textContent = userData.email.split('@')[0];
    } else {
        document.getElementById('user').style.display = 'none';
    }

    document.getElementById('logout').addEventListener('click', () => {
        sessionStorage.clear();
        window.location = '/05.Fisher-Game/index.html';
    });
    document.querySelector('.load').addEventListener('click', loadData);

    document.getElementById('addForm').addEventListener('submit', addCatch);
})

async function addCatch(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
   
    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        const res = await fetch('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(data)
        });
        
        if (!res.ok) {
            const error = res.json();
            throw new Error(error.message);
        }

        ev.target.reset();
        loadData();
    } catch (err) {
        alert(err.message);
    }
}

async function loadData() {
    document.getElementById('catches').replaceChildren();

    const res = await fetch('http://localhost:3030/data/catches');

    const data = await res.json();

    document.getElementById('catches').replaceChildren(...data.map(createPreview));

    [...document.querySelectorAll('.delete')].forEach(b => b.addEventListener('click', deleteCatch));
    [...document.querySelectorAll('.update')].forEach(b => b.addEventListener('click', updateCatch));
}

async function updateCatch(ev) {
    ev.preventDefault();

    const catchDiv=ev.target.parentNode;
    const angler=catchDiv.querySelector('.angler').value;
    const weight=catchDiv.querySelector('.weight').value;
    const species=catchDiv.querySelector('.species').value;
    const location=catchDiv.querySelector('.location').value;
    const bait=catchDiv.querySelector('.bait').value;
    const captureTime=catchDiv.querySelector('.captureTime').value;

    const currentCatch={
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }
    
    const id=catchDiv.querySelector('.update').getAttribute('data-id');
    
    try {
        if (Object.values(currentCatch).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(currentCatch)
        });
        
        if (!res.ok) {
            const error = res.json();
            throw new Error(error.message);
        }

        loadData();
    } catch (err) {
        alert(err.message);
    }
}

async function deleteCatch(ev) {
    const id = ev.target.getAttribute('data-id');
  
    try {
        const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'delete',
            headers: {
                'X-Authorization': userData.token
            }
        })

        if (!res.ok) {
            const error = res.json();
            throw new Error(error.message);
        }

        loadData();
    } catch (err) {
        alert(err.message);
    }
}

function createPreview(item) {
    const isOwner = (userData && userData.id == item._ownerId);

    const div = document.createElement('div');
    div.className = 'catch';
    div.innerHTML = `<label>Angler</label>
    <input type="text" class="angler" value="${item.angler}" ${!isOwner ? 'disabled' : ''}>
    <label>Weight</label>
    <input type="text" class="weight" value="${item.weight}" ${!isOwner ? 'disabled' : ''}>
    <label>Species</label>
    <input type="text" class="species" value="${item.species}" ${!isOwner ? 'disabled' : ''}>
    <label>Location</label>
    <input type="text" class="location" value="${item.location}" ${!isOwner ? 'disabled' : ''}>
    <label>Bait</label>
    <input type="text" class="bait" value="${item.bait}" ${!isOwner ? 'disabled' : ''}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${item.captureTime}" ${!isOwner ? 'disabled' : ''}>
    <button class="update" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Update</button>
    <button class="delete" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Delete</button>`;
    
    return div;
=======
let userData = null;

window.addEventListener('DOMContentLoaded', () => {
    loadData();

    userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
        document.querySelector('.email > span:nth-child(1)').textContent = userData.email.split('@')[0];
    } else {
        document.getElementById('user').style.display = 'none';
    }

    document.getElementById('logout').addEventListener('click', () => {
        sessionStorage.clear();
        window.location = '/05.Fisher-Game/index.html';
    });
    document.querySelector('.load').addEventListener('click', loadData);

    document.getElementById('addForm').addEventListener('submit', addCatch);
})

async function addCatch(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
   
    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        const res = await fetch('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(data)
        });
        
        if (!res.ok) {
            const error = res.json();
            throw new Error(error.message);
        }

        ev.target.reset();
        loadData();
    } catch (err) {
        alert(err.message);
    }
}

async function loadData() {
    document.getElementById('catches').replaceChildren();

    const res = await fetch('http://localhost:3030/data/catches');

    const data = await res.json();

    document.getElementById('catches').replaceChildren(...data.map(createPreview));

    [...document.querySelectorAll('.delete')].forEach(b => b.addEventListener('click', deleteCatch));
    [...document.querySelectorAll('.update')].forEach(b => b.addEventListener('click', updateCatch));
}

async function updateCatch(ev) {
    ev.preventDefault();

    const catchDiv=ev.target.parentNode;
    const angler=catchDiv.querySelector('.angler').value;
    const weight=catchDiv.querySelector('.weight').value;
    const species=catchDiv.querySelector('.species').value;
    const location=catchDiv.querySelector('.location').value;
    const bait=catchDiv.querySelector('.bait').value;
    const captureTime=catchDiv.querySelector('.captureTime').value;

    const currentCatch={
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }
    
    const id=catchDiv.querySelector('.update').getAttribute('data-id');
    
    try {
        if (Object.values(currentCatch).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(currentCatch)
        });
        
        if (!res.ok) {
            const error = res.json();
            throw new Error(error.message);
        }

        loadData();
    } catch (err) {
        alert(err.message);
    }
}

async function deleteCatch(ev) {
    const id = ev.target.getAttribute('data-id');
  
    try {
        const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'delete',
            headers: {
                'X-Authorization': userData.token
            }
        })

        if (!res.ok) {
            const error = res.json();
            throw new Error(error.message);
        }

        loadData();
    } catch (err) {
        alert(err.message);
    }
}

function createPreview(item) {
    const isOwner = (userData && userData.id == item._ownerId);

    const div = document.createElement('div');
    div.className = 'catch';
    div.innerHTML = `<label>Angler</label>
    <input type="text" class="angler" value="${item.angler}" ${!isOwner ? 'disabled' : ''}>
    <label>Weight</label>
    <input type="text" class="weight" value="${item.weight}" ${!isOwner ? 'disabled' : ''}>
    <label>Species</label>
    <input type="text" class="species" value="${item.species}" ${!isOwner ? 'disabled' : ''}>
    <label>Location</label>
    <input type="text" class="location" value="${item.location}" ${!isOwner ? 'disabled' : ''}>
    <label>Bait</label>
    <input type="text" class="bait" value="${item.bait}" ${!isOwner ? 'disabled' : ''}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${item.captureTime}" ${!isOwner ? 'disabled' : ''}>
    <button class="update" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Update</button>
    <button class="delete" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Delete</button>`;
    
    return div;
>>>>>>> b784f9252f16cdbfa9606cbc4e8408d538877fdf
}