package crapsgame.craps.model;

public class Player {
    private int point;

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public void resetPoint() {
        point = 0;
    }
}
