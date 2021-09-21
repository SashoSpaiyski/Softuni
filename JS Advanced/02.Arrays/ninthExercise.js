function isMagical(array) {
    let firstSum = 0;

    for (let i = 0; i < array.length; i++) {
        firstSum += array[0][i];
    }

    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = 0; j < array.length; j++) {
            sum += array[i][j];
        }
        if (sum !== firstSum) {
            return false;
        }
    }

    for (let j = 0; j < array.length; j++) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i][j];
        }
        if (sum !== firstSum) {
            return false;
        }
    }
    
    return true;
}

isMagical([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);