window.addEventListener('load', solve);

function solve() {
    const genreField = document.querySelector("#genre");
    const nameField = document.querySelector("#name");
    const authorField = document.querySelector("#author");
    const dateField = document.querySelector("#date");
    const addBtn = document.querySelector("#add-btn");

    addBtn.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();
        const genre = genreField.value;
        const name = nameField.value;
        const author = authorField.value;
        const date = dateField.value;

        if (genre && name && author && date) {
            const div = document.createElement('div');
            div.classList.add("hits-info");
            div.innerHTML=`<img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${name}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3>
            <button class="save-btn">Save song</button>
            <button class="like-btn">Like song</button>
            <button class="delete-btn">Delete</button>`

            const saveBtn=div.querySelector(".save-btn");
            saveBtn.addEventListener('click', saveSong);

            const likeBtn=div.querySelector(".like-btn");
            likeBtn.addEventListener('click', likeSong);

            const deleteBtn=div.querySelector(".delete-btn");
            deleteBtn.addEventListener('click', deleteSong);

            document.querySelector(".all-hits-container").appendChild(div);
        }

        genreField.value = "";
        nameField.value = "";
        authorField.value = "";
        dateField.value = "";
    }

    function saveSong(e){
        e.preventDefault();
        // let song = document.querySelector(".hits-info");
        // const div=document.createElement('div');
        // div.classList.add("hits-info");
        // let genre = (song.querySelectorAll('h2')[0].textContent.substring(song.querySelectorAll('h2')[0].textContent.indexOf(' ')+1)).trim();
        // let name = (song.querySelectorAll('h2')[1].textContent.substring(song.querySelectorAll('h2')[1].textContent.indexOf(' ')+1)).trim();
        // let author = (song.querySelectorAll('h2')[2].textContent.substring(song.querySelectorAll('h2')[1].textContent.indexOf(' ')+1)).trim();
        // let date = (song.querySelector('h3').textContent.substring(song.querySelector('h3').textContent.indexOf(' ')+1)).trim();
        // song.remove();
        // div.innerHTML=`<img src="./static/img/img.png">
        // <h2>Genre: ${genre}</h2>
        // <h2>Name: ${name}</h2>
        // <h2>Author: ${author}</h2>
        // <h3>Date: ${date}</h3>
        // <button class="delete-btn">Delete</button>`

        // const deleteBtn=div.querySelector(".delete-btn");
        // deleteBtn.addEventListener('click', deleteSong);

        const savedContainer=document.querySelector(".saved-container");
        const div=document.querySelector('.hits-info');
        div.querySelector('.save-btn').remove();
        div.querySelector('.like-btn').remove();
        savedContainer.appendChild(div);
    }

    function likeSong(e){
        e.preventDefault();
        const likesTab=document.querySelector(".likes p");
        let likes = likesTab.textContent;
        let likez=Number(likes.split(' ')[2]);
        likesTab.textContent='Total Likes: '+(likez+1);
        e.target.disabled=true;
    }

    function deleteSong(e){
        e.preventDefault();
        e.target.parentElement.remove();
    }
}