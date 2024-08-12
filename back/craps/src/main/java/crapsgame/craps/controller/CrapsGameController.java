package crapsgame.craps.controller;

import crapsgame.craps.service.CrapsGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CrapsGameController {
    @Autowired
    private CrapsGameService crapsGameService;

    @GetMapping ("/rollDice")
    public String rollDice() {
        return crapsGameService.rollDice();
    }
}
