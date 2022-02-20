import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class TravelOptimizer {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int edges = Integer.parseInt(reader.readLine());

        int[][] relations = new int[edges][edges];

        for (int i = 0; i < edges; i++) {
            int[] tokens = Arrays.stream(reader.readLine().split(", "))
                    .mapToInt(Integer::parseInt)
                    .toArray();

            int source = tokens[0];
            int dest = tokens[1];
            int weight = tokens[2];

            relations[i] = new int[]{source, dest, weight};
        }
        int[][] graph = new int[edges][edges];

        for (int[] relation : relations) {
            int from = relation[0];
            int to = relation[1];
            int weight = relation[2];

            graph[from][to] = weight;
            graph[to][from] = weight;
        }

        int start = Integer.parseInt(reader.readLine());
        int end = Integer.parseInt(reader.readLine());
        int stops = Integer.parseInt(reader.readLine());


        StringBuilder out = new StringBuilder();
        List<Integer> path = dijkstra(graph, start, end, stops+1);
        if (path.size() == 1) {
            System.out.println("There is no such path.");
        } else {
            for (int i = path.size() - 1; i >= 0; i--) {
                out.append(path.get(i)).append(" ");
            }
            System.out.println(out);
        }

    }

    public static List<Integer> dijkstra (int[][] graph, int start, int end, int stops) {
        int stopsMade=0;
        int[] prevNodes = new int[graph.length];
        int[] distances = new int[graph.length];
        boolean[] visited = new boolean[graph.length];

        Arrays.fill(distances, Integer.MAX_VALUE);
        Arrays.fill(prevNodes, -1);

        distances[start] = 0;

        PriorityQueue<Integer> queue = new PriorityQueue<>(
                Comparator.comparingInt(node -> distances[node]));

        queue.offer(start);

        while (!queue.isEmpty()) {
            int minNode = queue.poll();

            visited[minNode] = true;

            int[] children = graph[minNode];

            for (int i = 0; i < children.length; i++) {
                if (children[i] != 0 && !visited[i]) {
                    if(stopsMade>stops){
                        break;
                    }
                    stopsMade++;
                    queue.offer(i);

                    int newDistance = distances[minNode] + graph[minNode][i];

                    if (newDistance < distances[i]) {
                        distances[i] = newDistance;
                        prevNodes[i] = minNode;
                    }
                }
            }
        }

        List<Integer> path = new ArrayList<>();

        path.add(end);

        int prev = prevNodes[end];
        while (prev != -1) {
            path.add(prev);
            prev = prevNodes[prev];
        }

        return path;
    }
}
