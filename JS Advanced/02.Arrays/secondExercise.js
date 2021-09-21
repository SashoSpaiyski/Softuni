function printArr(array, step) {
    const newArr = [];
    for (let i = 0; i < array.length; i += step) {
        newArr[newArr.length] = array[i];
    }
    return(newArr);
}