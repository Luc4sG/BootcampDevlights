function log(req, res, next) {
    console.log('Request received:',req.path, req.method );
    next(); // next() is a function that tells express to continue with the next middleware
}

module.exports = log;