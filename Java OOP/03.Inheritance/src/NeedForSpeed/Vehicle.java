package NeedForSpeed;

public class Vehicle {
    //fields
    private static final double DEFAULT_FUEL_CONSUMPTION = 1.25;
    private double fuelConsumption; //литри разход на 1 км
    private double fuel; //налични литри гориво
    private int horsePower; //конски сили

    //constructor
    public Vehicle(double fuel, int horsePower) {
        this.setFuel(fuel);
        this.setHorsePower(horsePower);
        this.setFuelConsumption(DEFAULT_FUEL_CONSUMPTION);
    }

    //getters and setters
    public double getFuelConsumption() {
        return this.fuelConsumption;
    }

    public void setFuelConsumption(double fuelConsumption) {
        this.fuelConsumption = fuelConsumption;
    }

    public double getFuel() {
        return this.fuel;
    }

    public void setFuel(double fuel) {
        this.fuel = fuel;
    }

    public int getHorsePower() {
        return this.horsePower;
    }

    public void setHorsePower(int horsePower) {
        this.horsePower = horsePower;
    }

    public void drive(double kilometers) {
        //колко гориво сме изгорили
        //проверка дали горивото, което имаме ще стигне -> налично гориво >= игореното
        double consumedFuel = kilometers * this.getFuelConsumption();
        if (this.getFuel() >= consumedFuel) {
            double leftFuel = this.getFuel() - consumedFuel;
            this.setFuel(leftFuel);
        }
    }
}
