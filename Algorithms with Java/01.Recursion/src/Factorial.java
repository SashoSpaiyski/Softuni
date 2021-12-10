import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int factorial = getFactorial(n);

        System.out.println(factorial);
    }

    public static int getFactorial(int n){
        if(n==1){
            return 1;
        }

        return n * getFactorial(n-1);
    }
}
