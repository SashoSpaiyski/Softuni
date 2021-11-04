const loadBooksBtn = document.querySelector('#loadBooks');
const tableBody = document.querySelector('tbody');
const form = document.querySelector('#submitForm');
const editForm = document.querySelector('#editForm');

attachEvents();

function attachEvents() {
    window.addEventListener('load', displayBooks);
    tableBody.addEventListener('click', onClick);
    loadBooksBtn.addEventListener('click', displayBooks);
    form.addEventListener('submit', addBook);
}

async function onClick(ev) {
    if (ev.target.id == 'deleteBtn') {
        const id = ev.target.parentElement.parentElement.querySelector('[hidden]').textContent;
        await deleteBook(id);
    } else if (ev.target.id == 'editBtn') {
        const id = ev.target.parentElement.parentElement.querySelector('[hidden]').textContent;
        editForm.style.display='block';
        form.style.display='none';
        editForm.addEventListener('submit', editBook.bind(null,id));
    }
}

async function editBook(id,event) {
    event.preventDefault();
    console.log('here')
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    const formData = new FormData(editForm);
    const book = {
        author: formData.get('author'),
        title: formData.get('title')
    }

    if (book.author == '' || book.title == '') {
        return alert('You must enter author and title!');
    }

    await fetch(url, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    })

    editForm.style.display='none';
        form.style.display='block';
}

async function deleteBook(id) {
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;

    await fetch(url, {
        method: 'delete'
    })
}

async function addBook(ev) {
    ev.preventDefault();
    const formData = new FormData(form);
    const book = {
        author: formData.get('author'),
        title: formData.get('title')
    }

    if (book.author == '' || book.title == '') {
        return alert('You must enter author and title!');
    }

    const url = 'http://localhost:3030/jsonstore/collections/books';

    try {
        const res = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })
        if (!res.ok) {
            throw new Error(res.message);
        }

        form.reset();
    } catch (err) {
        alert('Error ' + err.message);
    }
}

async function displayBooks() {
    tableBody.innerHTML = '';
    const booksData = await getBooksData();

    Object.entries(booksData).forEach(b => {
        const row = document.createElement('tr');
        row.innerHTML = `<tr>
        <td>${b[1].title}</td>
        <td>${b[1].author}</td>
        <td hidden>${b[0]}</td>
        <td>
        <button id="editBtn">Edit</button>
        <button id="deleteBtn">Delete</button>
        </td>
        </tr>`

        tableBody.appendChild(row);
    })
}

async function getBooksData() {
    const url = 'http://localhost:3030/jsonstore/collections/books';

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(res.message);
        }

        const data = await res.json()
        return data;
    } catch (err) {
        alert('Error ' + err.message);
    }
}