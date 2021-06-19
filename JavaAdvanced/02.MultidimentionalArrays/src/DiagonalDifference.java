import java.util.Arrays;
import java.util.Scanner;

public class DiagonalDifference {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int size = Integer.parseInt(scanner.nextLine());
        int[][] matrix = new int[size][size];
        fillMatrix(scanner, matrix, size);

        int difference=getDiagonalDiff(matrix);
        System.out.println(difference);
    }

    private static int getDiagonalDiff(int[][] matrix) {
        int primarySum=0;
        int secondarySum=0;
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix.length; col++) {
                if(row==col){
                    primarySum+=matrix[row][col];
                }
                if(row+col== matrix.length-1){
                    secondarySum+=matrix[row][col];
                }
            }
        }
        return Math.abs(primarySum-secondarySum);
    }

    private static void fillMatrix(Scanner scanner, int[][] matrix, int size) {
        for (int row = 0; row < size; row++) {
            matrix[row] = Arrays.stream(scanner.nextLine().split("\\s+")).mapToInt(Integer::parseInt).toArray();
        }
    }
}
