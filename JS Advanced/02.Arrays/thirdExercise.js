function printArr(commands) {
    let initialNumber = 1;
    const array = [];
    for (const command of commands) {
        if (command == 'add') {
            array.push(initialNumber++);
        } else {
            array.pop(initialNumber++);
        }
    }
    if (array.length == 0) {
        console.log('Empty');
    } else {
        array.forEach(el => console.log(el));
    }
}