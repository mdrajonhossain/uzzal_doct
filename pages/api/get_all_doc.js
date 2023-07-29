const mongoose = require('mongoose');
var stinfodata = require('./server_model/stinfodata');


export default function handler(req, res) {

  mongoose.connect('mongodb+srv://rajonhossaindhaka:3MfTD6daYp5djh5i@cluster0.nodwt.mongodb.net/medical')
    .then(data => {
      console.log("connecting successfully");
    })
    .catch(error => {
      console.log("error");
    })


  try {

    stinfodata.find({}, function (err, data) {
      if (!err) {
        res.status(200).json({ doct: data })
      }
    })



  } catch (err) {
    console.log(err);
  }



}