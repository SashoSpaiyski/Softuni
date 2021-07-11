import java.util.Scanner;

public class ReVolt {
    static int currPlayerRow = 0;
    static int currPlayerCol = 0;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int matrixSize = Integer.parseInt(scanner.nextLine());
        int commandsCount = Integer.parseInt(scanner.nextLine());
        char[][] matrix = new char[matrixSize][matrixSize];

        for (int i = 0; i < matrixSize; i++) {
            matrix[i] = scanner.nextLine().toCharArray();
        }

        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                if (matrix[i][j] == 'f') {
                    currPlayerRow = i;
                    currPlayerCol = j;
                }
            }
        }

        boolean hasFinished = false;
        while (commandsCount-- > 0) {
            String command = scanner.nextLine();

            switch (command) {
                case "up":
                    hasFinished = movePlayer(matrix, -1, 0);
                    break;
                case "down":
                    hasFinished = movePlayer(matrix, +1, 0);
                    break;
                case "left":
                    hasFinished = movePlayer(matrix, 0, -1);
                    break;
                case "right":
                    hasFinished = movePlayer(matrix, 0, +1);
                    break;
            }

            if (hasFinished) {
                break;
            }
        }

        if (hasFinished) {
            System.out.println("Player won!");
        } else {
            System.out.println("Player lost!");
        }

        for (char[] chars : matrix) {
            System.out.println(chars);
        }
    }

    public static boolean movePlayer(char[][] matrix, int rowAddition, int colAddition) {
        int newPlayerRow = ensureIndexIsInBounds(currPlayerRow + rowAddition, matrix.length);
        int newPlayerCol = ensureIndexIsInBounds(currPlayerCol + colAddition, matrix.length);
        boolean hasFinished = false;

        if (matrix[newPlayerRow][newPlayerCol] == 'B') {
            newPlayerRow = ensureIndexIsInBounds(newPlayerRow + rowAddition, matrix.length);
            newPlayerCol = ensureIndexIsInBounds(newPlayerCol + colAddition, matrix.length);
        } else if (matrix[newPlayerRow][newPlayerCol] == 'T') {
            newPlayerRow = ensureIndexIsInBounds(newPlayerRow - rowAddition, matrix.length);
            newPlayerCol = ensureIndexIsInBounds(newPlayerCol - colAddition, matrix.length);
        }

        if (matrix[newPlayerRow][newPlayerCol] == 'F') {
            hasFinished = true;
        }

        matrix[currPlayerRow][currPlayerCol] = '-';
        matrix[newPlayerRow][newPlayerCol] = 'f';
        currPlayerRow = newPlayerRow;
        currPlayerCol = newPlayerCol;

        return hasFinished;
    }

    public static int ensureIndexIsInBounds(int index, int bounds) {
        if (index < 0) {
            index = bounds - 1;
        }
        if (index >= bounds) {
            index = 0;
        }
        return index;
    }
}
