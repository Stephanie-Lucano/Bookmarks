const bookmarksController = require("./controllers/bookmarksController")
const express = require("express");

const app = express();

app.use("/bookmarks", bookmarksController)

app.get("/", (req, res) => {
    res.send("Welcome to Bookmarks App");
});

app.get("*", (request, response) => {
    response.json({ error: "Page  not found"})
})

module.exports = app;