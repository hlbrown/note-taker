const express = require("express");
const path = require("path");
const noteRouter = require("./routes/noteRouter");

const PORT = process.env.PORT || 3001;
const app = express();

//middleware for parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//public folder accessible to the public
app.use(express.static("public"));

//note route
app.use("/api/notes", noteRouter);

//get landing page route
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//listening for the app on port 3001
app.listen(PORT, () => {
    console.log(`App is listing at http://localhost:${PORT} `);
});

