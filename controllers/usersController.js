const db = require("../db/queries");

// const messages = [
//     {
//         id: 1,
//         text: "Hi there!",
//         user: "Jason",
//         added: new Date().toDateString(),
//     },
//     {
//         id: 2,
//         text: "I like beautiful sunny days",
//         user: "David",
//         added: new Date().toDateString(),
//     },
//     {
//         id:3,
//         text: "Ramen is my favorite food",
//         user: "Chika",
//         added: new Date().toDateString(),
//     }
// ];

async function getUsernames(req, res) {
    const users = await db.getAllUsers();
    res.render("index", {
        title: "Mini Message Board",
        users: users,
    });
}

async function createUsernameGet(req, res) {
    res.render("form", 
        {title: "Form Input"}
    );
}

async function authorByIdGet(req, res) {
    const {authorId} = req.params;
    console.log(typeof(authorId))
    const author = await db.getAuthorById(authorId);
    if(!author) {
        res.status(404).send("Author Not Found");
        return;
    }
    res.render("authorMessage", {
        title: author.username, 
        author: author,
    });
}

async function createUsernamePost(req, res) {
    const {authorName, authorText} = req.body;
    // messages.push({text: req.body.authorText, user: req.body.authorName, added: new Date().toDateString(), id: messages.at(-1).id + 1});
    await db.insertUser(authorText, authorName, new Date().toDateString())
    res.redirect("/");
}

module.exports = {
    getUsernames,
    createUsernameGet,
    authorByIdGet,
    createUsernamePost
}