import express from "express";

const charRouter = express.Router()
charRouter.get("/", (req, res) => {
    res.render(
        "pages/content.ejs",
        {
            title: "Characters Page",
            subtitle: "Read about all your favourite Mario bros characters"
        })
})

export default charRouter;