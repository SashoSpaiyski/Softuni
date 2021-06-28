import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Consumer;

public class CustomMinFunction {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Function <приема, връща>
        //Consumer <приема> -> void
        //Supplier <връща>
        //Predicate<приема> -> връща true/false
        //BiFunction<приема1, приема2, връща>

        String input = scanner.nextLine(); // "1 4 3 2 1 7 13" -> split -> ["1", "4", "3", "2", "1", "7", "13"]
        int [] numbers = Arrays.stream(input.split("\\s+")).mapToInt(Integer::parseInt).toArray();
        //приема масив от числа -> принтира минималното
        Consumer<int[]> printMin = array -> System.out.print(Arrays.stream(array).min().orElse(0));
        printMin.accept(numbers);
    }
}
