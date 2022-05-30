// import other routes
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Salut serverul este UP!!!!');
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;