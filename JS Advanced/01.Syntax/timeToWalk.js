function calculateTime(steps, stepLength, speed){
    let distance=stepLength*steps;
    let timeInSeconds=distance/(speed*(5/18));
    let timeToAdd=Math.floor(distance/500)*60;

    timeInSeconds+=timeToAdd;
    timeInSeconds=Math.round(timeInSeconds);
    let date=new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    console.log(date);
}


calculateTime(2564, 0.70, 5.5);