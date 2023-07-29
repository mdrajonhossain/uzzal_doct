var mongoose = require('mongoose');


const Schema = mongoose.Schema

const stinfoSchema = new Schema({
    st_name: String,
    st_father: String,
    st_mother: String,
    village: String,
    post_Office: String,
    thana: String,
    district: String,
    registration_type: String,
    registration_number: String,
    st_img: String,
})

 
module.exports = mongoose.models.stinfodata || mongoose.model('stinfodata', stinfoSchema);

