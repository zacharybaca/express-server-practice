// fruitRoutes.js

const express = require("express");
const fruitRouter = express.Router();

fruitRouter.route("/")
    .get((req, res) => {
        res.send("GET on /fruit endpoint");
    })
    .post((req, res) => {
        res.send("POST on /fruit endpoint");
    });

fruitRouter.route("/:fruitId")
    .get((req, res) => {
        res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
    });

// export the entire router so we can require() it in server.js
module.exports = fruitRouter;
