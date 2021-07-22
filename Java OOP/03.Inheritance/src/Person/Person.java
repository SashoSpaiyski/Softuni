package Person;

public class Person {
    //fields
    private String name;
    private int age;

    //constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    //getters
    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }
}
