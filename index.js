const bind = (f, ...x) => (...y) => f(...x, ...y);

module.exports = bind;
