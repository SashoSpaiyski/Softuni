import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class BestTeam {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        if(numbers[0]==numbers[numbers.length-1]){
            for (int number : numbers) {
                System.out.print(number+" ");
            }
            return;
        }

        int[] length = new int[numbers.length];
        int[] prev = new int[numbers.length];

        Arrays.fill(prev, -1);

        int maxLength = 0, maxIndex = -1;

        for (int i = 0; i < numbers.length; i++) {
            int current = numbers[i];
            int bestLength = 1;
            int bestIndex = -1;
            for (int j = i - 1; j >= 0; j--) {
                if (numbers[j] < current && length[j] + 1 >= bestLength) {
                    bestLength = length[j] + 1;
                    bestIndex = j;
                }
            }
            prev[i] = bestIndex;
            length[i] = bestLength;
            if (maxLength < bestLength) {
                maxLength = bestLength;
                maxIndex = i;
            }
        }

        List<Integer> sequence = new ArrayList<>();

        int index = maxIndex;

        while (index != -1) {
            sequence.add(numbers[index]);
            index = prev[index];
        }

        int[] length2 = new int[numbers.length];
        int[] prev2 = new int[numbers.length];

        Arrays.fill(prev2, -1);

        int maxLength2 = 0, maxIndex2 = -1;

        for (int i = 0; i < numbers.length; i++) {
            int current = numbers[i];
            int bestLength2 = 1;
            int bestIndex2 = -1;
            for (int j = i - 1; j >= 0; j--) {
                if (numbers[j] > current && length2[j] + 1 >= bestLength2) {
                    bestLength2 = length2[j] + 1;
                    bestIndex2 = j;
                }
            }
            prev2[i] = bestIndex2;
            length2[i] = bestLength2;
            if (maxLength2 < bestLength2) {
                maxLength2 = bestLength2;
                maxIndex2 = i;
            }
        }

        List<Integer> sequence2=new ArrayList<>();

        int index2 = maxIndex2;

        while (index2 != -1) {
            sequence2.add(numbers[index2]);
            index2 = prev2[index2];
        }

        if(sequence.size()>=sequence2.size()){
            if(sequence.get(0)==sequence.get(sequence.size()-1)){
                System.out.print(sequence.get(0)+" "+sequence.get(sequence.size()-1));
                return;
            }
            for (int i = sequence.size() - 1; i >= 0; i--) {
                System.out.print(sequence.get(i) + " ");
            }
        } else{
            if(sequence2.get(0)==sequence2.get(sequence2.size()-1)){
                System.out.print(sequence2.get(0)+" "+sequence2.get(sequence2.size()-1));
                return;
            }
            for (int i = sequence2.size() - 1; i >= 0; i--) {
                System.out.print(sequence2.get(i) + " ");
            }
        }
    }
}
