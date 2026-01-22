const Router = require("express");
const indexRouter = Router();

const messages = [
    {
        id: 1,
        text: "Hi there!",
        user: "Jason",
        added: new Date().toDateString(),
    },
    {
        id: 2,
        text: "I like beautiful sunny days",
        user: "David",
        added: new Date().toDateString(),
    },
    {
        id:3,
        text: "Ramen is my favorite food",
        user: "Chika",
        added: new Date().toDateString(),
    }
];

// Get methods for route "/" , "/new" and "/:authorId"

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Mini Message Board",messages: messages});
});

indexRouter.get("/new", (req, res) => {
    res.render("form", {title: "Form Input"});
})

indexRouter.get("/authors/:authorId", (req, res) => {
    const {authorId} = req.params;
    const author = messages.find(message => message.id === Number(authorId));
    if(!author) {
        res.status(404).send("Author Not Found");
        return;
    }
    res.render("authorMessage", {title: author.user, author: author});
});

// Post method for form "/new" and pushing the contents inside messages array

indexRouter.post("/new", (req, res) => {
    messages.push({text: req.body.authorText, user: req.body.authorName, added: new Date().toDateString(), id: messages.at(-1).id + 1});
    res.redirect("/");
});

module.exports = indexRouter;