import java.util.LinkedHashSet;
import java.util.Scanner;

public class UniqueUsernames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        LinkedHashSet<String> words = new LinkedHashSet<>();

        for (int count = 1; count <= n; count++) {
            String word = scanner.nextLine();
            words.add(word);
        }

        //words.forEach(System.out::println);
        for (String word : words) {
            System.out.println(word);
        }
    }
}
