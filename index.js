import express from "express";
import gameRouter from "./routes/games.js";
import charRouter from "./routes/characters.js";

const app = express();
const port = 3003;

app.use("/games", gameRouter);
app.use("/characters", charRouter)

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render(
        "pages/home",
        {
            title: "My wonderful MB website!",
            subtitle: "Momma mia!"
        }
        )
})



app.listen(port, console.log(`coming atcha from the ${port}`))