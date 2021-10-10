function calculator() {
    let firstSelector;
    let secondSelector;
    let thirdSelector;

    function init(selector1, selector2, selector3){
        firstSelector=document.querySelector(selector1);
        secondSelector=document.querySelector(selector2);
        thirdSelector=document.querySelector(selector3);
    }

    function add(){
        thirdSelector.value=Number(firstSelector.value) + Number(secondSelector.value);
    }

    function subtract(){
        thirdSelector.value=Number(firstSelector.value) - Number(secondSelector.value);
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




