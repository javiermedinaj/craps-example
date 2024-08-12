package crapsgame.craps.service;

import crapsgame.craps.model.Dice;
import crapsgame.craps.model.Player;
import org.springframework.stereotype.Service;

@Service
public class CrapsGameService {

    private final Dice dice;
    private final Player player;

    public CrapsGameService() {
        this.dice = new Dice();
        this.player = new Player();
    }

    public String rollDice() {
        int die1 = dice.roll();
        int die2 = dice.roll();
        int sum = die1 + die2;

        if (player.getPoint() == 0) {
            if (sum == 7 || sum == 11) {
                return "You rolled " + sum + ". You win!";
            } else if (sum == 2 || sum == 3 || sum == 12) {
                return "You rolled " + sum + ". Craps! You lose.";
            } else {
                player.setPoint(sum);
                return "Your point is " + player.getPoint() + ". Keep rolling!";
            }
        } else {
            if (sum == player.getPoint()) {
                player.resetPoint();
                return "You rolled " + sum + ". You hit your point! You win!";
            } else if (sum == 7) {
                player.resetPoint();
                return "You rolled 7. You lose.";
            } else {
                return "You rolled " + sum + ". Keep rolling!";
            }
        }
    }
}
