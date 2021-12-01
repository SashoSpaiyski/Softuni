<<<<<<< HEAD
const element = document.querySelector('#errorBox');
const output = element.querySelector('span');

export function notify(msg){
    output.textContent=msg;
    element.style.display = 'block';

    setTimeout(()=>element.style.display = 'none', 3000);
=======
const element = document.querySelector('#errorBox');
const output = element.querySelector('span');

export function notify(msg){
    output.textContent=msg;
    element.style.display = 'block';

    setTimeout(()=>element.style.display = 'none', 3000);
>>>>>>> b784f9252f16cdbfa9606cbc4e8408d538877fdf
}