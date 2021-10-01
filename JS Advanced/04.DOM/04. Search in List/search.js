function search() {
   let towns=Array.from(document.querySelectorAll('#towns li'));
   let searchedText=document.getElementById('searchText').value;
   let matchesFound=0;
   
   for (let town of towns) {
         town.style.textDecoration = 'none';
         town.style.fontWeight= 'normal';
   }

   for (let town of towns) {
      if(town.textContent.includes(searchedText)){
         town.style.textDecoration = 'underline';
         town.style.fontWeight= 'bold';
         matchesFound++;
      }
   }

   document.getElementById('result').textContent=`${matchesFound} matches found`;
}
