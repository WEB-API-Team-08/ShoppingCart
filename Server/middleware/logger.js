function log(req, res, next) {
    console.log(`Request recieved: ${req.headers.host}${req.url} Method:${req.method}`);

    next();
}

module.exports = log;