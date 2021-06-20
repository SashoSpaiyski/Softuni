import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringMatrixRotation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int degrees = getDegrees(scanner);
        List<String> rows = fillRows(scanner);
        char[][] matrix = getMatrix(rows);
        int rotationTimes=degrees/90;
        for (int rotation = 0; rotation < rotationTimes; rotation++) {
            matrix = rotateMatrix(matrix, degrees);
        }
        printMatrix(matrix);
    }

    private static int getDegrees(Scanner scanner) {
        String rotationCommand = scanner.nextLine();
        String regex = "Rotate\\((?<degrees>([0-9]+))\\)";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(rotationCommand);
        boolean matched=matcher.find();
        return Integer.parseInt(matcher.group("degrees"));
    }

    private static List<String> fillRows(Scanner scanner) {
        List<String> rows = new ArrayList<>();
        String currRow = scanner.nextLine();
        while (!currRow.equals("END")) {
            rows.add(currRow);
            currRow = scanner.nextLine();
        }
        return rows;
    }

    private static char[][] getMatrix(List<String> rows) {
        int lengthOfEachRow = getLength(rows);
        char[][] matrix = new char[rows.size()][lengthOfEachRow];
        for (int row = 0; row < rows.size(); row++) {
            for (int col = 0; col < lengthOfEachRow; col++) {
                if (col < rows.get(row).length()) {
                    matrix[row][col] = rows.get(row).charAt(col);
                } else {
                    matrix[row][col] = ' ';
                }
            }
        }
        return matrix;
    }

    private static int getLength(List<String> rows) {
        int maxLength = Integer.MIN_VALUE;
        for (String row : rows) {
            if (row.length() > maxLength) {
                maxLength = row.length();
            }
        }
        return maxLength;
    }

    private static void printMatrix(char[][] matrix) {
        for (char[] chars : matrix) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(chars[j]);
            }
            System.out.println();
        }
    }

    private static char[][] rotateMatrix(char[][] matrix, int degrees) {
        char[][] newMatrix = new char[matrix[0].length][matrix.length];

        int i = 0;
        for (int col = matrix.length - 1; col >= 0; col--) {
            int j = 0;
            for (int row = 0; row < matrix[i].length; row++) {
                newMatrix[row][col] = matrix[i][j];
                j++;
            }
            i++;
        }
        return newMatrix;
    }
}
