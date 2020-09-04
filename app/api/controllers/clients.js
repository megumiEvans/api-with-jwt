//const userModel = require('../models/users');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
var requestjson = require('request-json');

var urlMlabRaiz = "https://api.mlab.com/api/1/databases/mquezada/collections"
var apiKey="apiKey=GOLqWa850qO8tsdCUdby6eq9eKPInBkt";

var urlClientes = "https://api.mlab.com/api/1/databases/mquezada/collections/Clientes?apiKey=GOLqWa850qO8tsdCUdby6eq9eKPInBkt";
var clienteMLab = requestjson.createClient(urlClientes)

module.exports = {
 getClients: function(req, res) {
    clienteMLab.get('', function(err, resM, body) {
          if (err) {
            console.log(body)
          } else {
            res.send(body)
          }
        })
    },
 
 addClient: function(req, res) {
      clienteMLab.post('', req.body, function(err, resM, body) {
          res.send(body)
      })
    },

}