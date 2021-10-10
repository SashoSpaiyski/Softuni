function displayInfo(...args) {
    let info = {};

    for (const arg of args) {
        const type = typeof (arg);
        console.log(`${type}: ${arg}`);
        let count = 0;
        if (!info[type]) {
            info[type] = 1;
        } else {
            info[type]++;
        }
    }

    Object.keys(info).sort((a,b)=> info[b]-info[a]).forEach(t=>console.log(`${t} = ${info[t]}`))
}

displayInfo('cat', 42, function () { console.log('Hello world!'); });