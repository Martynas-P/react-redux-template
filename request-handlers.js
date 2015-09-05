var path = require('path');

exports.main = function(req, res) {
  res.render('main', {
    env: process.env.NODE_ENV
  });
};
