const express = require("express")
const redis  = require("redis")

const app = express()

const client = redis.createClient({
    host: "redis-server", // this redis server is from docker-compose.yml file and it will use the redis docker container
    port: 6379
})

client.set("visits", 0)

app.get("/", (req, res) => {
    client.get("visits", (err, visits) => {
        res.send("Number of visits " + visits);
        client.set("visits", parseInt(visits) + 1)
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
