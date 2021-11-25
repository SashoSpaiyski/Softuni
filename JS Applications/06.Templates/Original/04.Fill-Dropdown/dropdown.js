import { getItems, postItem } from "./api.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const selectTemplate = (data) => html`
<select id="menu">
    ${data.map(option => html`<option value=${option._id}>${option.text}</option>`)}
</select>`

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

const div=document.querySelector('div');

const input=document.querySelector('#itemText');

async function updateList(){
    const data = await getItems();
    render(selectTemplate(data), div);
}

updateList();

async function onSubmit(ev){
    ev.preventDefault();

    const item = input.value;
    if(!item.trim()){
        form.reset();
        return;
    }
    await postItem(item);
    updateList();
}