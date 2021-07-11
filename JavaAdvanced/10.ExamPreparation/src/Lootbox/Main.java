package Lootbox;

import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Integer> firstLootBox= Arrays.stream(scanner.nextLine().split("\\s+")).map(Integer::parseInt).collect(Collectors.toList());
        List<Integer> secondLootBox= Arrays.stream(scanner.nextLine().split("\\s+")).map(Integer::parseInt).collect(Collectors.toList());
        List<Integer> collectedItems=new ArrayList<>();

        while(!firstLootBox.isEmpty() && !secondLootBox.isEmpty()){
            int firstItem = firstLootBox.get(0);
            int secondItem = secondLootBox.get(secondLootBox.size()-1);
            int sum=firstItem+secondItem;

            if(sum%2==0){
                collectedItems.add(sum);
                firstLootBox.remove(0);
                secondLootBox.remove(secondLootBox.size()-1);
            } else{
                int removedItem=secondLootBox.remove(secondLootBox.size()-1);
                firstLootBox.add(removedItem);
            }
        }

        if(firstLootBox.isEmpty()){
            System.out.println("First lootbox is empty");
        }else{
            System.out.println("Second lootbox is empty");
        }

        int itemSum=collectedItems.stream().mapToInt(Integer::intValue).sum();
        if(itemSum>=100){
            System.out.printf("Your loot was epic! Value: %d", itemSum);
        } else{
            System.out.printf("Your loot was poor... Value: %d", itemSum);
        }
    }
}
