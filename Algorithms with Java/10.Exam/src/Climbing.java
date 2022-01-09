import java.util.*;

public class Climbing {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int rows = Integer.parseInt(scanner.nextLine());
        int cols = Integer.parseInt(scanner.nextLine());

        int[][] elements = new int[rows][cols];

        for (int row = 0; row < rows; row++) {
            elements[row] = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt)
                    .toArray();
        }

        int[][] table = new int[rows][cols];

        table[0][0] = elements[0][0];

        for (int col = 1; col < cols; col++) {
            table[0][col] = table[0][col - 1] + elements[0][col];
        }

        for (int row = 1; row < rows; row++) {
            table[row][0] = table[row - 1][0] + elements[row][0];
        }

        for (int row = 1; row < rows; row++) {
            for (int col = 1; col < cols; col++) {
                table[row][col] = Math.max(table[row - 1][col] + elements[row][col],
                        table[row][col - 1] + elements[row][col]);
            }
        }

        int row = rows - 1;
        int col = cols - 1;

        List<String> path = new ArrayList<>();

        path.add(row+", "+ col);

        while (row > 0 || col > 0) {

            int top = -1;

            if (row > 0) {
                top = table[row - 1][col];
            }

            int left = -1;

            if (col > 0) {
                left = table[row][col - 1];
            }

            if (top > left) {
                row--;
            } else {
                col--;
            }

            path.add(row+", "+col);
        }

        System.out.println(table[rows-1][cols-1]);
        for (String indexes : path) {
            int r = Integer.parseInt(indexes.split(", ")[0]);
            int c = Integer.parseInt(indexes.split(", ")[1]);
            System.out.print(elements[r][c]+ " ");
        }
    }
}
