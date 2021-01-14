package com.shadow.walls.levels;

import com.shadow.walls.Const;
import com.shadow.walls.Walls;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class Levels {
    private static final String levelJson = "/Levels.json";

    @SuppressWarnings("unchecked")
    public static void loadLevels() {

        JSONParser parser = new JSONParser();

        InputStream is = Levels.class.getResourceAsStream(levelJson);
        try (InputStreamReader reader = new InputStreamReader(is)) {
            Object obj = parser.parse(reader);

            JSONArray levelList = (JSONArray) obj;

            levelList.forEach(lvl -> parseLevel((JSONObject) lvl));

            Walls.levels.forEach(LevelObject::hide);
            Walls.keyLevels.forEach(LevelObject::removePlayer);

        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }

    }


    private static void parseLevel(JSONObject level) {
        JSONObject levelObject = (JSONObject) level.get("level");
        char[][] klvl = new char[Const.HEIGHT][Const.LENGTH];
        char[][] lvl = new char[Const.HEIGHT][Const.LENGTH];

        for (int i = 0; i < Const.HEIGHT; i++) {
            String a = (String) levelObject.get("" + i);
            lvl[i] = a.toCharArray();
            klvl[i] = a.toCharArray();
        }

        Walls.keyLevels.add(new LevelObject(lvl));
        Walls.levels.add(new LevelObject(klvl));
    }
}