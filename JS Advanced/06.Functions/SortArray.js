function sort(numbers, order){
    if(order=='asc'){
        return numbers.sort((a,b) => a-b);
    }else{
        return numbers.sort((a,b)=>b-a);
    }
}