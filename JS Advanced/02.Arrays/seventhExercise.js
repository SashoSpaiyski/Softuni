function sortNumbers(array){
    const sortedArray=array.sort((a,b)=>a-b).slice();
    const finalArray=[];

    for (let i=0;i<array.length;i+=2){
        finalArray[i]=sortedArray.shift();
        finalArray[i+1]=sortedArray.pop();
    }

    return finalArray;
}