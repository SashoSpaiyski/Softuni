package NeedForSpeed;

public class Car extends Vehicle {
    //fields: hp, fuel, consumption
    private static final double DEFAULT_FUEL_CONSUMPTION = 3;

    public Car(double fuel, int horsePower) {
        super(fuel, horsePower);
        //fuelConsumption -> 3
        super.setFuelConsumption(DEFAULT_FUEL_CONSUMPTION);
    }
}
