var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const adminuser = new Schema({
    username: { type: String },
    email: { type: String },
    password: String,
    created_at: { type: Date, default: new Date().toJSON().slice(0, 10) },
    updated_at: { type: Date, default: new Date().toJSON().slice(0, 10) }
})



adminuser.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassord = await bcrypt.hash(this.password, salt)
        this.password = hashedPassord
        next()
    } catch (error) {
        next(error)
    }
})




module.exports = mongoose.models.adminuser || mongoose.model('adminuser', adminuser);