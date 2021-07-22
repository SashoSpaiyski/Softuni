package CardsWithPower;

public class Card {
    //боя, стойност
    private CardSuits cardSuit;
    private CardRanks cardRank;
    private int power;

    //конструктор
    public Card(CardSuits cardSuit, CardRanks cardRank) {
        this.cardSuit = cardSuit;
        this.cardRank = cardRank;
    }

    //сила на картата = сила на боя + сила на стойност
    public int getPower() {
        return this.cardSuit.getSuitPower() + this.cardRank.getPowerRank();
    }

    public CardSuits getCardSuit() {
        return this.cardSuit;
    }

    public CardRanks getCardRank() {
        return this.cardRank;
    }

}
