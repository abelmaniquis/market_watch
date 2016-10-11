var axios = require('axios');
var Portfolio = require('./portfolio.model.js');
var portfolioRouter = require('express').Router();
var controller = require('./portfolio.controller.js')//source of bug

portfolioRouter.route('/portfolio')
  .get(controller.get)
  .post(controller.post)

portfolioRouter.route('/portfolio/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)

module.exports = portfolioRouter;

/*
This information is saved for later use:
var someStock = req.params.stock
  axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${someStock}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
*/