package ShoppingSpree;

import java.util.ArrayList;
import java.util.List;

public class Person {
    //fields
    private String name;
    private double money;
    private List<Product> products;

    //constructor
    public Person(String name, double money) {
        this.setName(name);
        this.setMoney(money);
        this.products = new ArrayList<>();
    }

    public String getName() {
        return this.name;
    }

    private void setName(String name) {
        //invalid -> empty
        if (name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        this.name = name;
    }

    private void setMoney(double money) {
        //invalid -> money < 0
        if (money < 0) {
            throw new IllegalArgumentException("Money cannot be negative");
        }
        this.money = money;
    }

    public void buyProduct(Product product) {
        //проверка дали имаме пари
        //мога да го купя ако парите на човека >= цената на продукта
        //не мога да го купя ако парите на човека < цената на продукта
        if (this.money >= product.getCost()) {
            this.products.add(product);
            this.money -= product.getCost();
        } else {
            String message = String.format("%s can't afford %s", this.name, product.getName());
            throw new IllegalArgumentException(message);
        }

    }
}
