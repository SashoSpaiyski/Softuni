import java.util.Scanner;

public class Vectors {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        Integer[] vector = new Integer[n];
        fillVector(vector, 0);
    }

    private static void fillVector(Integer[] vector, int i) {
        if(i>=vector.length){
            printVector(vector);
        } else {
            for (int j = 0; j <= 1; j++) {
                vector[i]=j;
                fillVector(vector, i+1);
            }
        }
    }

    private static void printVector(Integer[] vector) {
        for (int i = 0; i < vector.length; i++) {
            System.out.print(vector[i]);
        }
        System.out.println();
    }
}
