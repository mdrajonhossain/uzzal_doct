const mongoose = require('mongoose');
var adminuser = require('./server_model/adminuser');


export default function handler(req, res) {

  mongoose.connect('mongodb+srv://rajonhossaindhaka:3MfTD6daYp5djh5i@cluster0.nodwt.mongodb.net/medical')
    .then(data => {
      console.log("connecting successfully");
    })
    .catch(error => {
      console.log("error");
    })



  try {

    const bal = new adminuser({
      username: "admin",
      email: "admin@gmail.com",
      password: "a123456"
    })

    bal.save(function (err, result) {
      if (err) {
        res.status(200).json({ data: err })
      } else {
        res.status(200).json({ data: result })
      }
    })
  } catch (err) {
    console.log(err);
  }



}