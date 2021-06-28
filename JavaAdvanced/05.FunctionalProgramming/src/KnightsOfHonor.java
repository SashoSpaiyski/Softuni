import java.util.Scanner;
import java.util.function.Consumer;

public class KnightsOfHonor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Function <приема, връща>
        //Consumer <приема> -> void
        //Supplier <връща>
        //Predicate<приема> -> връща true/false
        //BiFunction<приема1, приема2, връща>
        String input = scanner.nextLine();
        String[] names = input.split("\\s+");
        Consumer<String> printSir = s -> System.out.println("Sir " + s);

        for (String name : names ) {
            printSir.accept(name);
        }
    }
}
