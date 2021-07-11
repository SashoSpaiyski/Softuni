package guild;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Guild {
    private List<Player> roster;
    private String name;
    private int capacity;

    public Guild(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.roster = new ArrayList<>();
    }

    public void addPlayer(Player player) {
        if (this.roster.size() < this.capacity) {
            this.roster.add(player);
        }
    }

    public boolean removePlayer(String name) {
        Player player = roster.stream()
                .filter(p -> p.getName().equals(name))
                .findFirst()
                .orElse(null);
        if(player!=null){
            roster.remove(player);
            return true;
        }
        return false;
    }

    public void promotePlayer(String name) {
        roster.stream()
                .filter(p -> p.getName().equals(name))
                .findFirst().ifPresent(player -> player.setRank("Member"));
    }

    public void demotePlayer(String name) {
        roster.stream()
                .filter(p -> p.getName().equals(name))
                .findFirst().ifPresent(player -> player.setRank("Trial"));
    }

    public Player[] kickPlayersByClass(String clazz) {
        List<Player> removedPlayers = roster.stream()
                .filter(p -> p.getClazz().equals(clazz))
                .collect(Collectors.toList());

        roster.removeAll(removedPlayers);

        Player[] removed=new Player[removedPlayers.size()];

        for (int i = 0; i < removed.length; i++) {
            removed[i]= removedPlayers.get(i);
        }

        return removed;
    }

    public int count() {
        return this.roster.size();
    }

    public String report() {
        return String.format("Players in the guild: %s:%n%s", name,
                roster.stream()
                        .map(Player::toString)
                        .collect(Collectors.joining(System.lineSeparator()))
        ).trim();
    }
}
