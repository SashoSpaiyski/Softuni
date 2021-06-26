import java.util.LinkedHashSet;
import java.util.Scanner;

public class SetsOfElements {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        //"4 3" -> split(" ") -> ["4", "3"]
        String[] input = scanner.nextLine().split("\\s+");
        int n = Integer.parseInt(input[0]);//брой на елементите в първия сет
        int m = Integer.parseInt(input[1]); //брой на елементите във втория сет

        LinkedHashSet<Integer> firstSet = new LinkedHashSet<>(n);
        LinkedHashSet<Integer> secondSet = new LinkedHashSet<>(m);

        for (int i = 0; i < n; i++) {
            int number = Integer.parseInt(scanner.nextLine());
            firstSet.add(number);
        }

        for (int i = 0; i < m; i++) {
            int number = Integer.parseInt(scanner.nextLine());
            secondSet.add(number);
        }

        //{1, 3, 5, 7}
        //{3, 4, 5}

        firstSet.retainAll(secondSet);
        //firstSet -> дублирани елементи

        for (int number : firstSet) {
            System.out.print(number + " ");
        }
        //firstSet.forEach(number -> System.out.print(number + " "));
    }
}
