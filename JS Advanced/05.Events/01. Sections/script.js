function create(words) {
   const content = document.getElementById('content');
   content.addEventListener('click', reveal)

   for (let word of words) {
      let paragraph=document.createElement('p');
      paragraph.textContent=word;
      paragraph.style.display='none';
      let div=document.createElement('div');
      div.appendChild(paragraph);
      content.appendChild(div);
   }

   function reveal(ev) {
      if (ev.target.tagName == 'DIV' && ev.target != content) {
         ev.target.firstChild.style.display = "";
      }
   }
}
