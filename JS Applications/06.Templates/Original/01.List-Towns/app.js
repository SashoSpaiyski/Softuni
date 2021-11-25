import { html, render } from './node_modules/lit-html/lit-html.js';

const listTemplate = (towns) => html`
<ul>
    ${towns.map(t => html`<li>${t}</li>`)}
</ul>`;

document.querySelector('button').addEventListener('click', loadTowns);
const inputField = document.querySelector('#towns');
const div = document.querySelector('#root');


function loadTowns(ev){
    ev.preventDefault();

    const towns = inputField.value.split(',').map(t=>t.trim());

    const result = listTemplate(towns);

    render(result, div);
}