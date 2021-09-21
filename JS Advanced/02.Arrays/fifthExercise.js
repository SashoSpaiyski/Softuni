function extractArr(array){
    const extractedArr = [];
    
    array.reduce(function (acc,curr) {
        if (curr<acc){
            return acc;
        } else{
            extractedArr.push(curr);
            return curr;
        }
    }, 0)

    return extractedArr;
}


extractArr([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );