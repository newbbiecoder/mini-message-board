const {Client} = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (255),
    username VARCHAR (255),
    added VARCHAR (255)
);
`
async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {rejectUnauthorized: false}
    })
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done");
}

main();