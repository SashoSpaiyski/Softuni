import java.util.Collections;
import java.util.Scanner;
import java.util.TreeSet;

public class PeriodicTable {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int countCompounds = Integer.parseInt(scanner.nextLine());
        TreeSet<String> elements = new TreeSet<>();

        for (int compound = 1; compound <= countCompounds; compound++) {
            String chemicalCompound = scanner.nextLine(); //"Mo O Ce"
            //всеки хим. елемент -> аdd
            String [] chemicalElements = chemicalCompound.split("\\s+"); //["Mo", "O", "Ce"]

            //начин 1
            //elements.addAll(Arrays.asList(chemicalElements));

            //начин 2
            Collections.addAll(elements, chemicalElements);
        }

        for (String element : elements) {
            System.out.print(element + " ");
        }
        //elements.forEach(el ->  System.out.print(element + " "));
    }
}
