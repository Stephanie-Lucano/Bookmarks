const express = require("express")

const bookmarksArray = require("../models/bookmarks")

const bookmarks = express.Router()

bookmarks.get("/", (request, response) => {
    response.json(bookmarksArray)
})

// OUR TASK
// Use `request.params.index` to send back the bookmark in our bookmarksArray at that index.
// TIP: you should send it back as JSON
// BONUS: send a 404 *if* the index doesn't exist in our bookmarksArray
bookmarks.get("/:index", (request, response) => {
    const { index } = request.params
    bookmarksArray[index]
    ? response.json(bookmarksArray[index])
    : response.status(404).json({ error: "Error bookmark not found"})
})

bookmarks.post("/", (request, response) => {
    bookmarksArray.push(request.body)
    response.status(201).json(bookmarksArray)
})

module.exports = bookmarks;