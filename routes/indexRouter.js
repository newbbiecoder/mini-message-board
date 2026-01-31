const Router = require("express");
const indexRouter = Router();

const {getUsernames, createUsernameGet, authorByIdGet, createUsernamePost} = require("../controllers/usersController");

// Get methods for route "/" , "/new" and "/:authorId"

indexRouter.get("/", getUsernames);

indexRouter.get("/new", createUsernameGet);

indexRouter.get("/authors/:authorId", authorByIdGet);

// Post method for form "/new" and pushing the contents inside messages array

indexRouter.post("/new", createUsernamePost);

module.exports = indexRouter;