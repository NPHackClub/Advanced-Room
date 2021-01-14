package com.shadow.walls.engine.movement;

import com.shadow.walls.Const;
import com.shadow.walls.Walls;

import static com.shadow.walls.Const.*;

public class MoveHandler {
    // region Player Methods

    public static void movePlayer(EPlayerInput in) {
        switch (in) {
            case UP -> up();
            case DOWN -> down();
            case LEFT -> left();
            case RIGHT -> right();
            case RESET -> reset();
        }
    }

    private static void movePlayer(int x, int y) {
        int lastX = Walls.levels.get(Walls.currentLevel).playerX;
        int lastY = Walls.levels.get(Walls.currentLevel).playerY;
        char[][] klvl = Walls.keyLevels.get(Walls.currentLevel).get();
        char[][] lvl = Walls.levels.get(Walls.currentLevel).get();

        if(klvl[x][y] == SPACE || klvl[x][y] == Const.GOAL) {
            lvl[x][y] = PLAYER;
            lvl[lastX][lastY] = SPACE;

        } else return;

        showAround(x, y, lvl);

        Walls.levels.get(Walls.currentLevel).set(lvl);
    }

    public static void showAround(int x, int y, char[][] lvl) {
        char[][] klvl = Walls.keyLevels.get(Walls.currentLevel).get();
        lvl[x - 1][y - 1] = klvl[x - 1][y - 1];

        /* Lower Section */
        if(lvl[x + 1][y + 1] != PLAYER) lvl[x + 1][y + 1]  = klvl[x + 1][y + 1];
        if(lvl[x + 1][y] != PLAYER) lvl[x + 1][y] = klvl[x + 1][y];
        if(lvl[x + 1][y - 1] != PLAYER) lvl[x + 1][y - 1] = klvl[x + 1][y - 1];

        /* Mid Section */
        if(lvl[x][y + 1] != PLAYER) lvl[x][y + 1] = klvl[x][y + 1];
        if(lvl[x][y - 1] != PLAYER) lvl[x][y - 1] = klvl[x][y - 1];

        /* Upper Section */
        if(lvl[x - 1][y + 1] != PLAYER) lvl[x - 1][y + 1] = klvl[x - 1][y + 1];
        if(lvl[x - 1][y] != PLAYER) lvl[x - 1][y] = klvl[x - 1][y];
        if(lvl[x - 1][y - 1] != PLAYER) lvl[x - 1][y - 1] = klvl[x - 1][y - 1];

        Walls.levels.get(Walls.currentLevel).set(lvl);
    }

    // endregion

    //region Movement Methods

    public static void up() {
        System.out.println("w"); //TODO: Remove
        movePlayer(Walls.levels.get(Walls.currentLevel).playerX - 1, Walls.levels.get(Walls.currentLevel).playerY);
    }
    public static void down() {
        System.out.println("s"); //TODO: Remove
        movePlayer(Walls.levels.get(Walls.currentLevel).playerX + 1, Walls.levels.get(Walls.currentLevel).playerY);
    }
    public static void left() {
        System.out.println("a"); //TODO: Remove
        movePlayer(Walls.levels.get(Walls.currentLevel).playerX, Walls.levels.get(Walls.currentLevel).playerY - 1);
    }
    public static void right() {
        System.out.println("d"); //TODO: Remove
        movePlayer(Walls.levels.get(Walls.currentLevel).playerX, Walls.levels.get(Walls.currentLevel).playerY + 1);
    }
    /* TODO: Sort out resetting level */
    public static void reset() {
        System.out.println("r"); //TODO: Remove
    }

    //endregion
}
