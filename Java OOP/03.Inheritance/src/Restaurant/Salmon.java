package Restaurant;

import java.math.BigDecimal;

public class Salmon extends MainDish {
    //fields: name, price, grams + double SALMON_GRAMS = 22
    private static final double SALMON_GRAMS = 22;

    public Salmon(String name, BigDecimal price) {
        super(name, price, SALMON_GRAMS);
    }
}
