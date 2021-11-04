const url = 'http://localhost:3030/jsonstore/collections/students';
const firstNameInput = document.querySelector('[name="firstName"]');
const lastNameInput = document.querySelector('[name="lastName"]');
const facultyNumberInput = document.querySelector('[name="facultyNumber"]');
const gradeInput = document.querySelector('[name="grade"]');
const tableBody = document.querySelector('tbody');
const submitBtn = document.querySelector('#submit');

attachEvents();

function attachEvents() {
    window.addEventListener('load', displayStudents);
    submitBtn.addEventListener('click', addStudent);
}

async function displayStudents() {
    clearInputFields();
    tableBody.innerHTML = '';
    const students = await extractStudents();

    students.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${s.firstName}</td>
        <td>${s.lastName}</td>
        <td>${s.facultyNumber}</td>
        <td>${s.grade}</td>`;

        tableBody.appendChild(tr);
    })
}

async function extractStudents() {
    try {
        const res = await fetch(url);
        if (res.ok != true) {
            throw new Error(res.message);
        }
        const data = await res.json();

        return Object.values(data);
    } catch (err) {
        alert('Error ' + err.message);
    }
}

async function addStudent(ev) {
    ev.preventDefault();
    const student = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        facultyNumber: facultyNumberInput.value,
        grade: gradeInput.value
    }

    if (student.firstName == '' || student.lastName == '' || student.facultyNumber == '' || student.grade == '') {
        return alert('You must enter all fields!');
    }

    if (isNaN(Number(student.grade)) || !Number.isInteger(Number(student.facultyNumber))) {
        return alert('Grade and Fac. number must be numbers!');
    }

    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(student)
        });
        if (res.ok == false) {
            throw new Error(res.message);
        }

        await displayStudents();
    } catch (err) {
        alert('Error ', err.message)
    }
}

function clearInputFields() {
    gradeInput.value = '';
    facultyNumberInput.value = '';
    lastNameInput.value = '';
    firstNameInput.value = '';
}