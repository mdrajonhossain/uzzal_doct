const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var adminuser = require('./server_model/adminuser');


export default function handler(req, res) {

  mongoose.connect('mongodb+srv://rajonhossaindhaka:3MfTD6daYp5djh5i@cluster0.nodwt.mongodb.net/medical')
    .then(data => {
      console.log("connecting successfully");
    })
    .catch(error => {
      console.log("error");
    })


  // jwt.verify(token, '154364asdfasdfs', function(err, decoded) {
  // 	if(!err){
  // 		console.log(decoded)
  // 	}
  // });



  if (req.method === 'POST') {

    try {

      console.log(req.body.email, 9999)
      console.log(req.body.password, 11111)



      adminuser.findOne({ email: req.body.email }, function (err, data) {

        if (data != null) {
          var loginss = bcrypt.compareSync(req.body.password, data.password);

          console.log(req.body.password);

          if (loginss) {
            const token = jwt.sign({ username: data.username }, "154364asdfasdfs", { expiresIn: "2h", });
            res.status(200).json({
              login: true,
              token: token,
              data: [data.username, data.email]
            })
          } else {
            res.status(200).json({ login: false, token: false })
          };
        } else {
          res.status(200).json({ login: false, token: false })
        }
      })

    } catch (err) {
    }


  }







}