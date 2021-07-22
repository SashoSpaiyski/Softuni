package ShoppingSpree;

public class Product {
    //fields
    private String name;
    private double cost;

    //constructor
    public Product(String name, double cost) {
        this.setName(name);
        this.setCost(cost);
    }

    //getter and setter for name
    public String getName() {
        return this.name;
    }

    private void setName(String name) {
        //invalid -> empty
        if(name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        this.name = name;
    }

    //getters and setters for cost
    public double getCost() {
        return this.cost;
    }

    private void setCost(double cost) {
        //invalid -> cost < 0
        if (cost < 0) {
            throw new IllegalArgumentException("Money cannot be negative");
        }
        this.cost = cost;
    }

}
