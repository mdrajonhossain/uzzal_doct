import nextConnect from 'next-connect';
import multer from 'multer';
const mongoose = require('mongoose');
var stinfodata = require('./server_model/stinfodata');
import cloudinary from './ass_file/cloudinary'


mongoose.connect('mongodb+srv://rajonhossaindhaka:3MfTD6daYp5djh5i@cluster0.nodwt.mongodb.net/medical')
  .then(data => {
    console.log("connecting successfully");
  })
  .catch(error => {
    console.log("error");
  })

export const config = {
  api: {
    bodyParser: false,
  },
};


const upload = multer({
  storage: multer.diskStorage({}),
});

const stform = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: "Sorry something Happened!" });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: "Not Allowed" });
  },
});



stform.use(upload.single('img'));

stform.post((req, res) => {

  try {

    cloudinary.uploader.upload(req.file.path, { resource_type: "image" })
      .then((response) => {
        const stud = new stinfodata({
          st_name: req.body.caname,
          st_father: req.body.fathera,
          st_mother: req.body.mothera,
          village: req.body.villagea,
          post_Office: req.body.post_Officea,
          thana: req.body.thanaa,
          district: req.body.districta,
          registration_type: req.body.registration_typea,
          registration_number: req.body.registration_numbera,
          st_img: response.url
        })

        stud.save(function (err, result) {
          if (err) {
            res.status(200).json({ data: err })
          } else {
            res.status(200).json({ data: "success" });
          }
        })
      })
  } catch (err) {

  }




});



export default stform;

