
const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    app.get("/api/logout", Users.logout);
    // this route now has to be authenticated
    //app.get("/api/users", authenticate, Users.getAll);
    app.get("/api/users", Users.getAll);

// -------------------- new by me-----------
    // Create
    app.post('/api/pirate', Users.createPirate)
    // Read
    // get all
    app.get('/api/pirate', Users.getAllPirate)
    // get one
    app.get('/api/pirate/:id', Users.getSinglePirate)
    // Update
    app.put('/api/pirate/:id', Users.updatePirate)
    // Delete
    app.delete('/api/pirate/:id', Users.deletPirate)
}