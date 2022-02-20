import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Pipelines {
    private static boolean[][] graph;
    private static int[] parents;
    private static int source;
    private static int sink;

    private static boolean bfs() {
        boolean[] visited = new boolean[graph.length];

        Queue<Integer> queue = new LinkedList<>();
        queue.offer(source);
        visited[source] = true;

        while (!queue.isEmpty()) {
            int node = queue.poll();
            for (int child = graph[node].length-1; child >= 0; child--)
                if (graph[node][child] && !visited[child]) {
                    visited[child] = true;
                    parents[child] = node;
                    queue.offer(child);
                }
        }

        return visited[sink];
    }

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int persons = Integer.parseInt(bf.readLine());
        int tasks = Integer.parseInt(bf.readLine());
        int nodes = persons + tasks + 2;
        source = nodes - 2;
        sink = nodes - 1;
        graph = new boolean[nodes][nodes];
        parents = new int[nodes];
        parents[source] = -1;

        String[] agents= new String[persons];
        String[] pipelines = new String[tasks];
        for (int i = 0; i < agents.length; i++) {
            agents[i]=bf.readLine();
        }
        for (int i = 0; i < pipelines.length; i++) {
            pipelines[i]=bf.readLine();
        }
        Map<Integer, List<String>> map = new HashMap<>();
        for (int i = 0; i < persons; i++) {
            map.put(i, new ArrayList<>());
            String[] tokens = bf.readLine().split(", ");
            for (int j = 1; j < tokens.length; j++) {
                map.get(i).add(tokens[j]);
            }
        }
        for (int i = 0; i < agents.length; ++i) {
            String yn="";
            for (int j = 0; j < pipelines.length; j++) {
                if (map.get(i).contains(pipelines[j])){
                    yn+="Y";
                }else{
                    yn+="N";
                }
            }
            for (int j = 0; j < tasks; ++j)
                if (yn.charAt(j) == 'Y')
                    graph[i][persons + j] = true;
        }

        for (int i = 0; i < persons; ++i)
            graph[source][i] = true;

        for (int i = 0; i < tasks; ++i)
            graph[persons + i][sink] = true;

        while (bfs()) {
            int node = sink;
            while (node != source) {
                graph[parents[node]][node] = false;
                graph[node][parents[node]] = true;
                node = parents[node];
            }
        }

        StringBuilder result = new StringBuilder(16384);
        for (int i = 0; i < tasks; ++i)
            for (int j = 0; j < persons; ++j)
                if (graph[persons + j][i])
                    result.append((agents[i])).append(" - ").append(pipelines[j]).append('\n');

        System.out.print(result);

        bf.close();
    }
}
