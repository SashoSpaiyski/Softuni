function validate() {
    const input=document.getElementById('email');
    input.addEventListener('change', ()=>{
        const regex=/[a-z]+@[a-z]+\.[a-z]+/;
        if(!regex.test(input.value)){
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
}