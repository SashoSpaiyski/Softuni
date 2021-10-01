function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableBody = Array.from(document.getElementsByTagName('tbody'))[0];
      let rows = Array.from(tableBody.getElementsByTagName('tr'));
      let searched = document.getElementById('searchField').value;
      document.getElementById('searchField').value = '';
      for (let row of rows) {
         let cols = Array.from(row.getElementsByTagName('td'));
         for (let col of cols) {
            row.classList.remove("select");
         }
      }
      for (let row of rows) {
         let cols = Array.from(row.getElementsByTagName('td'));
         for (let col of cols) {
            if (col.textContent.includes(searched)) {
               row.classList.add("select");
            }
         }
      }
   }
}