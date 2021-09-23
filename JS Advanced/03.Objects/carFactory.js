function assemble(car) {
    const assembledCar = {};
    assembledCar.model=car.model;

    const engine = {};
    if (car.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
    }
    assembledCar.engine = engine;

    const carriage = {};
    if (car.carriage == 'hatchback') {
        carriage.type = 'hatchback';
    } else {
        carriage.type = 'coupe';
    }
    carriage.color = car.color;
    assembledCar.carriage=carriage;

    if(car.wheelsize%2==0){
        car.wheelsize--;
    }
    const wheels=[car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize];
    assembledCar.wheels=wheels;

    return assembledCar;
}

console.log(assemble({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }


));