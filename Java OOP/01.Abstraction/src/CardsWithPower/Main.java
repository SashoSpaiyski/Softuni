package CardsWithPower;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //ALT+INSERT
        Scanner scanner = new Scanner(System.in);
        String rank = scanner.nextLine(); //стойност
        String suit = scanner.nextLine(); //боя

        Card card = new Card(CardSuits.valueOf(suit), CardRanks.valueOf(rank));
        System.out.printf("Card name: %s of %s; Card power: %d", card.getCardRank(), card.getCardSuit(), card.getPower());

    }
}
