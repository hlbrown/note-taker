const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const {
    readFromFile,
    writeToFile,
    readAndAppend,
} = require("../helpers/fsUtils");

//gets the data from the json
router.get("/", (req, res) => {
    readFromFile("./db/db.json").then(data => res.json(JSON.parse(data)));
});

//router.post to get data and convert it into an object of the array
router.post("/", (req, res) => {
    const { title, text } = req.body;
        if (req.body) {
            const newEntry = {
                title,
                text,
                note_id: uuidv4(),
            };
            readAndAppend(newEntry, "./db/db.json");
        } else {
            res.json("Error posting new entry");
        }
});
//Delete methos uses the id 
router.delete("/:id", (req, res) =>{
    const { id } = req.params;
    const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    const noteIndex = notes.findIndex( notes => noteIndex.note_id === id);

    notes.slice(noteIndex, 1);

    writeToFile("./db/db.json", notes);
    return res.send();
});

module.exports = router;//exports router module