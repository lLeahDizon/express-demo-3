const fn1 = (req, res, next) => {
  res.render('test', {pageTitle: req.app.locals.title})
}

module.exports = fn1
