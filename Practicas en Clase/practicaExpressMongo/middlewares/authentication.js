function authentication(req, res, next) {
    // if (req.session.user) {
    //     next();
    // } else {
    //     res.redirect('/login');
    // }
    next();
}

module.exports = authentication;

