import java.util.*;

public class Paths {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int nodes = Integer.parseInt(scanner.nextLine());

        boolean[][] graph = new boolean[nodes][nodes];
        List<List<Integer>> paths = new ArrayList<>();

        for (int source = 0; source < nodes - 1; source++) {
            int[] destinations = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt)
                    .toArray();

            for (int dest : destinations) {
                graph[source][dest] = true;
            }
        }

        int target = nodes - 1;

        for (int i = 0; i < target; i++) {
            List<Integer> path = new ArrayList<>();
            path.add(i);
            findPaths(i, target, path, graph, paths);
        }
        print(paths);
    }

    private static void print(List<List<Integer>> paths) {
        for (List<Integer> path : paths) {
            for (int node : path) {
                System.out.print(node + " ");
            }
            System.out.println();
        }
    }

    private static void findPaths(int source, int destination, List<Integer> path, boolean[][] graph, List<List<Integer>> paths) {
        if (source == destination) {
            paths.add(new ArrayList<>(path));
        }

        for (int i = 0; i < graph[source].length; i++) {
            if (graph[source][i]) {
                path.add(i);
                findPaths(i, destination, path, graph, paths);
                path.remove(path.size() - 1);
            }
        }
    }
}
