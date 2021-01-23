const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost/pirate_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to the db"))
    .catch((err) => console.error("Something went wrong!\n", err))