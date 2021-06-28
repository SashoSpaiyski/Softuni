import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class ReverseAndExclude {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Function <приема, връща>
        //Consumer <приема> -> void
        //Supplier <връща>
        //Predicate<приема> -> връща true/false
        //BiFunction<приема1, приема2, връща>

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split("\\s+")).mapToInt(Integer::parseInt)
                .boxed().collect(Collectors.toList()); //1 2 3 4 5 6
        int n = Integer.parseInt(scanner.nextLine());

        //обратен ред
        Collections.reverse(numbers);

        //премахнем всички числа, които се делят на n
        Predicate<Integer> checkDivision = number -> number % n == 0;
        numbers.removeIf(checkDivision);

        //печатаме
        Consumer<List<Integer>> print = list -> list.forEach(e -> System.out.print(e + " "));
        print.accept(numbers);
    }
}
