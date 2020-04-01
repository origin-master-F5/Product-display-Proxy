const Router = require('express').Router();
const axios = require('axios');

// PROXY

// Product Display

Router.route('/')
  .get((req, res) => {
      axios.get("http://localhost:3002/product")
      .then(response => {
          res.status(200).json(response.data);
      })
      .catch(err => res.send(err))
     });

Router.route('/sku/:sku')
  .get((req, res) => {
    axios.get(`http://localhost:3002/product/sku/${req.params.sku}`)
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(err => res.send(err))
    });
   
Router.route('/name/:name')
  .get((req, res) => {
    axios.get(`http://localhost:3002/product/name/${req.params.name}`)
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(err => res.send(err))
    });

Router.route('/search')

  .post((req, res) => {
    const text = req.body.text;
    console.log('lee')
    axios.post(`http://localhost:3001/search/`, text)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => res.status(400).send(err));
  });
  
  Router.route('/search_related')
 
  .post((req, res) => {
    const text = req.body.text;
    console.log('lee')
    axios.post(`http://localhost:3001/search_related/`, text)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => res.status(400).send(err));
  });
  



module.exports = Router;
