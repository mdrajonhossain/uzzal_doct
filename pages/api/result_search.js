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

    stinfodata.findOne({ registration_number: req.body.registration_number }, function (err, data) {
      res.status(200).json({ data: data })
    })



  } catch (err) {
    console.log(err);
  }



}