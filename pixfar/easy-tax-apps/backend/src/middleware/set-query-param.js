const setQueryParam = (req, res, next) => {
    if (req.query) {
        req.query = { ...req.query, ...req.params };
    }
    next();
};

module.exports = { setQueryParam };
