const getAllRouter = require('./getAll');
const mssvRouter = require('./id');
const messageRouter = require('./message')

function route(app) {

    app.use((req,res,next)=> {
        console.log(`${req.method} ${req.url}`);
        next();
    });

    app.use('/', getAllRouter);

    app.use('/19110331', mssvRouter);

    app.use('/message', messageRouter)
}

module.exports = route;