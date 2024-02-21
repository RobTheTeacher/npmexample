import express from "express";
import { gameArray } from "../data/game-data.js";

const gameRouter = express.Router()
gameRouter.get("/", (req, res) => {
    res.render(
        "pages/content.ejs",
        {
            title: "Games Page",
            subtitle: "Here you can discover all the MB games!",
            games: gameArray
        })
})

export default gameRouter;