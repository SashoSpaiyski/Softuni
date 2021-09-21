function rotate(array, times) {
    for (let i = 0; i < times; i++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}
