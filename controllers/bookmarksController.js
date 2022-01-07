const express = require("express")

const bookmarksArray = require("../models/bookmark.js")

const bookmarks = express.Router()

bookmarks.get("/", (request, response) => {
    response.json(bookmarksArray)
})

module.exports = bookmarks;