function solve() {
   const creatorField = document.querySelector("#creator");
   const titleField = document.querySelector("#title");
   const categoryField = document.querySelector("#category");
   const contentField = document.querySelector("#content");
   const createBtn = document.getElementsByClassName("btn create")[0];
   const posts = document.querySelector("main section");
   const archiveSection = document.getElementsByTagName("ol")[0];

   createBtn.addEventListener('click', createArticle);

   function createArticle(e) {
      e.preventDefault();
      const title = titleField.value;
      const category = categoryField.value;
      const creator = creatorField.value;
      const content = contentField.value;

      const article = document.createElement('article');

      article.innerHTML = `
      <h1>${title}</h1>
      <p>Category:<strong>${category}</strong></p>
      <p>Creator:<strong>${creator}</strong></p>
      <p>${content}</p>
      <div class="buttons">
      <button class="btn delete">Delete</button>
      <button class="btn archive">Archive</button>
      </div>
      `

      posts.appendChild(article);

      const deleteBtn = article.querySelector(".btn.delete");
      deleteBtn.addEventListener('click', deleteArticle);

      const archiveBtn = article.querySelector(".btn.archive");
      archiveBtn.addEventListener('click', archiveArticle);
   }

   function deleteArticle(ev) {
      ev.target.parentElement.parentElement.remove();
   }

   function archiveArticle(ev) {
      const title = ev.target.parentElement.parentElement.querySelector("h1").textContent;
      ev.target.parentElement.parentElement.remove();
      console.log(title);
      archiveSection.innerHTML += `<li>${title}</li>`;
      sortList(archiveSection);
   }

   function sortList(list) {
      let i, switching, b, shouldSwitch;
     
      switching = true;
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list items:
        for (i = 0; i < (b.length - 1); i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Check if the next item should
          switch place with the current item: */
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            /* If next item is alphabetically lower than current item,
            mark as a switch and break the loop: */
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark the switch as done: */
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
      }
    }
}
