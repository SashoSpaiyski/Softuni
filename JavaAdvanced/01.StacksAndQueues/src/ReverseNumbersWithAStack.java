import java.util.ArrayDeque;
import java.util.Scanner;

public class ReverseNumbersWithAStack {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        ArrayDeque<Integer> stack = new ArrayDeque<>();
        String[] splitInput = input.split(" ");
        for (String element : splitInput) {
            stack.push(Integer.parseInt(element));
        }

        while(!stack.isEmpty()) {
            System.out.print(stack.pop() + " ");
        }
    }
}
