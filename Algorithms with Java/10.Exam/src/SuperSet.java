import java.util.Arrays;
import java.util.Scanner;

public class SuperSet {

    public static int[] arr;
    public static int numberOfDigits;
    public static int[] comb;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        arr = Arrays.stream(scanner.nextLine().split(", "))
                .mapToInt(Integer::parseInt).toArray();

        numberOfDigits = arr.length;

        for (int i = 1; i <= numberOfDigits; i++) {
            comb = new int[i];

            combinations(0, 1);
        }
    }

    private static void combinations(int index, int start) {
        if(index == comb.length){
            printArr();
        }else{
            for (int i = start; i <= numberOfDigits; i++) {
                comb[index] = i;
                combinations(index+1, i+1);
            }
        }
    }

    private static void printArr() {
        for (int el : comb) {
            int index = el;
            System.out.print(arr[index-1] + " ");
        }
        System.out.println();
    }
}