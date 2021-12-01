<<<<<<< HEAD
import { towns as townData } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const div = document.querySelector('#towns');
document.querySelector('button').addEventListener('click', search);
const input = document.querySelector('input');
const output = document.querySelector('#result');


const towns = townData.map(t => ({ name: t, match: false }));

const townCard = (town) => html`
<li class=${town.match ? "active" : "" }>${town.name}</li>`;

function search() {
   const match = input.value.trim().toLocaleLowerCase();
   let matches = 0;
   for (let town of towns) {
      if (match && town.name.toLocaleLowerCase().includes(match)) {
         town.match = true;
         matches++;
      } else{
         town.match = false;
      }
   }
   output.value=`${matches} matches found`;
   update();
}

function update() {
   render(html`<ul>${towns.map(townCard)}</ul>`, div);
}

update();
=======
import { towns as townData } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const div = document.querySelector('#towns');
document.querySelector('button').addEventListener('click', search);
const input = document.querySelector('input');
const output = document.querySelector('#result');


const towns = townData.map(t => ({ name: t, match: false }));

const townCard = (town) => html`
<li class=${town.match ? "active" : "" }>${town.name}</li>`;

function search() {
   const match = input.value.trim().toLocaleLowerCase();
   let matches = 0;
   for (let town of towns) {
      if (match && town.name.toLocaleLowerCase().includes(match)) {
         town.match = true;
         matches++;
      } else{
         town.match = false;
      }
   }
   output.value=`${matches} matches found`;
   update();
}

function update() {
   render(html`<ul>${towns.map(townCard)}</ul>`, div);
}

update();
>>>>>>> b784f9252f16cdbfa9606cbc4e8408d538877fdf
