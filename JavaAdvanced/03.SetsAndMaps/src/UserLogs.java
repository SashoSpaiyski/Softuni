import java.util.LinkedHashMap;
import java.util.Scanner;
import java.util.TreeMap;

public class UserLogs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        TreeMap<String, LinkedHashMap<String, Integer>> info = new TreeMap<>();
        while (!input.equals("end")) {
            //"IP={ip} message={message} user={username}"
            String[] data = input.split("\\s+"); //["IP={ip}", "message={message}", "user={username}"]
            String username = data[2].split("=")[1]; //"user={username}".split("=") -> ["user", "{username}"]
            //String message = data[1].split("=")[1]; //"message={message}".split("=") -> ["message", "{message}"]
            String ip = data[0].split("=")[1]; //"IP={ip}".split("=") => ["IP", "{ip}"]

            //info.putIfAbsent(username, new LinkedHashMap<>()); //добавя запис ако го няма ключ if(info.containsKey(username))
            //info.get(username).putIfAbsent(ip, 0); //добавя запис ако го няма
            //info.get(username).put(ip, info.get(username).get(ip) + 1);

            //1. проверка има ли username
            if (info.containsKey(username)) {
                LinkedHashMap<String, Integer> ips = info.get(username); //ip -> count
                if (ips.containsKey(ip)) {
                    ips.put(ip, ips.get(ip) + 1);
                } else {
                    ips.put(ip, 1);
                }

            } else {
                info.put(username, new LinkedHashMap<>());
                info.get(username).put(ip, 1);
            }

            input = scanner.nextLine();
        }


        info.entrySet().stream().
                forEach(entry -> { //username -> map
                            System.out.println(entry.getKey() + ": ");
                            int countEntry = entry.getValue().size();
                            for (var ipEntry : entry.getValue().entrySet()) {
                                //ip -> count
                                //IP => count,
                                if (countEntry > 1) {
                                    System.out.print(ipEntry.getKey() + " => " + ipEntry.getValue() + ", ");
                                } else { //count <= 1
                                    System.out.print(ipEntry.getKey() + " => " + ipEntry.getValue() + ".");
                                }
                                countEntry--;

                            }
                            System.out.println();
                        }
                );
    }
}
