const User = require("../models/User.model")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const { Pirate } = require("../models/pirates.models")
module.exports = {
    register: (req, res) => {
        User.create(req.body)
            .then((user) => {
                // set up the cookie
                // notice that we're using the SECRET_KEY from our .env file
                //console.log("yes")
                const userToken = jwt.sign({ id: user._id }, process.env.MY_SECRET)

                res.cookie("mycookie", userToken, { httpOnly: true }).json({
                    message: "This response has a cookie",
                    user,
                })
            })
            .catch((err) => res.status(400).json(err))
    },
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email })

        if (user === null) {
            console.log(user)
            // email not found in users collection
            console.log("bad")
            return res.sendStatus(400)
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if (!correctPassword) {
            // password wasn't a match!
            console.log("bad")
            return res.sendStatus(400)
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign(
            {
                id: user._id,
            },
            process.env.MY_SECRET
        )

        // note that the response object allows chained calls to cookie and json
        res
            .cookie("mycookie", userToken, process.env.MY_SECRET, {
                httpOnly: true,
            })
            .json({ msg: "success!", user })
    },
    getAll: (req, res) => {
        User.find({})
            .then((users) => {
                console.log(users)
                res.json({ users })
            })
            .catch((err) => res.status(400).json(err))
    },
    logout: (req, res) => {
        res.clearCookie("mycookie")
        res.sendStatus(200)
    },
//------------------------------------------------- new by me -----------------------------
getAllPirate: (req, res) => {
    Pirate.find({})
        .then((pirates) => res.json(pirates))
        .catch((err) => res.status(400).json(err))
},
createPirate: (req, res) => {
    // const { name, category, imgUrl } = req.body
    Pirate.create(req.body)
        .then((pirates) => res.json(pirates))
        .catch((err) => res.status(400).json(err))
},
getSinglePirate: (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then((pirates) => res.json(pirates))
        .catch((err) => res.status(400).json(err))
},
updatePirate: (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((pirates) => res.json(pirates))
        .catch((err) => res.status(400).json(err))
},
deletPirate: (req, res) => {
    Pirate.deleteOne({ _id: req.params.id})
        .then((pirates) => res.json(pirates))
        .catch((err) => res.status(400).json(err))
},
}