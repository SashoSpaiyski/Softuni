import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.stream.Collectors;

public class FindTheSmallestElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Function <приема, връща>
        //Consumer <приема> -> void
        //Supplier <връща>
        //Predicate<приема> -> връща true/false
        //BiFunction<приема1, приема2, връща>

        //приемаме списък -> печатаме индекса на най-малкото число
        List<Integer> numbers = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt).collect(Collectors.toList());

        Consumer<List<Integer>> printMinElement = list -> {
            int min = Integer.MAX_VALUE;
            for (int number : list) {
                if(number < min) {
                    min = number;
                }
            }
            //минималното число
            System.out.println(list.lastIndexOf(min));
        };

        printMinElement.accept(numbers);
    }
}
