import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class ListOfPredicates {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n=Integer.parseInt(scanner.nextLine());
        List<Integer> numbersToCheck=new ArrayList<>();
        for (int i = 0; i <n; i++) {
            numbersToCheck.add(i+1);
        }

        List<Integer> sequence= Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).boxed().collect(Collectors.toList());


        Predicate<Integer> isDivisible = number -> {
            for (Integer dividor:sequence) {
                if(dividor==0){
                    continue;
                }
                if(number % dividor != 0){
                    return false;
                }
            }
            return true;
        };

        for (int number:numbersToCheck) {
            if(isDivisible.test(number)){
                System.out.print(number + " ");
            }
        }
    }
}
