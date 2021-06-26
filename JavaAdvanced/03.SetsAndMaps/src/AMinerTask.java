import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class AMinerTask {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        LinkedHashMap<String, Integer> resources = new LinkedHashMap<>();

        String input=scanner.nextLine();
        while(!input.equals("stop")){
            int quantity=Integer.parseInt(scanner.nextLine());
            if(resources.putIfAbsent(input, quantity)!=null){
                resources.put(input, resources.get(input)+quantity);
            }
            input=scanner.nextLine();
        }


        for (Map.Entry<String, Integer> resource : resources.entrySet()) {
            System.out.println(resource.getKey()+" -> "+resource.getValue());
        }
    }
}
