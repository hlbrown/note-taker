const { v4: uuid4 } = require('uuid');
const fs = require('fs');
const router = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../Helpers/fsUtils');

router.get('/', (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

router.post('/', (req, res) => {
    const { title, text } = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid4(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error: Note did not post');
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

    const noteIndex = notes.findIndex(note => note.note_id === id);

    notes.splice(noteIndex, 1);

    writeToFile("./db/db.json", notes);
    return res.send();
});


// Export all routes for use in server file
module.exports = router;