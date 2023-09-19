function log(req, res, next) {
    console.log('Request received:',req.path, req.method );
    next();}

module.exports = log;