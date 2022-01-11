const express = require("express")

const bookmarksArray = require("../models/bookmarks")

const bookmarks = express.Router()

bookmarks.get("/", (request, response) => {
    response.json(bookmarksArray)
})

bookmarks.get("/:index", (request, response) => {
    response.send(request.params.index)
})

module.exports = bookmarks;