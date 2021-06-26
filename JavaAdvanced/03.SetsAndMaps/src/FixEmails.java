import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class FixEmails {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //запис: име -> имейл
        LinkedHashMap<String, String> emailsData = new LinkedHashMap<>();

        String name = scanner.nextLine();
        while(!name.equals("stop")) {
            //име
            String email = scanner.nextLine();
            //добавяме само имейли, които нямат: "us", "uk" or “com”
            if(!email.endsWith("us") && !email.endsWith("uk") && !email.endsWith("com")) {
                //валиден
                emailsData.put(name, email);
            }
            name = scanner.nextLine();
        }

        for (Map.Entry<String, String> emails: emailsData.entrySet()) {
            //име -> имейл
            System.out.println(emails.getKey() + " -> " + emails.getValue());

        }
    }
}
