package Restaurant;

import java.math.BigDecimal;

public class Dessert extends Food {
    //fields: name, price, grams + calories
    private double calories;

    public Dessert(String name, BigDecimal price, double grams, double calories) {
        super(name, price, grams);
        this.calories = calories;
    }

    public double getCalories() {
        return calories;
    }
}
