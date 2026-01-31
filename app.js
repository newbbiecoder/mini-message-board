// Initialise express function and path
const express = require("express");
const app = express();
const path = require("node:path");

// Import routes
const indexRouter = require("./routes/indexRouter");

// Set view directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set assets path
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// To parse form data into req.body
app.use(express.urlencoded({extended: true}));

// Use index router for / path
app.use("/", indexRouter);

// Error handler

app.use((req, res, next) => {
    res.status(404).send("Oops, where are we?")
})

const PORT = 3000;

app.listen(PORT, (error) => {
    if(error) {
        throw error
    }
    console.log(`Express app - listening on port ${PORT}`)
})