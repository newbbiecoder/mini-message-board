const pool = require("./pool");

async function getAllUsers() {
    const {rows} = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUser(text, username, added) {
    await pool.query("INSERT INTO usernames (text, username, added) VALUES ($1, $2, $3)", [text, username, added]);
}

async function getAuthorById(id) {
    const {rows} = await pool.query("SELECT * FROM usernames WHERE id = $1", [id]);
    return rows[0] || null;
}

module.exports = {
    getAllUsers,
    insertUser,
    getAuthorById
}