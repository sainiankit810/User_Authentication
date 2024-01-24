const users = require('../models/userModel');
const bcryptjs = require('bcryptjs');

const userController = {
    signup: async (req, res) => {
        const { name, password, email, contact } = req.body;
        try {
            const existUser = await users.findOne({email});
            if(existUser){
                return res.status(404).json({message: "User already Exist."})
            }
            const hashedPassword = await bcryptjs.hash(password,12);
            const newUser = await users.create({name, email, password: hashedPassword, contact})
            res.status(200).json({result: newUser})

        } catch (error) {
            res.status(500).json('Something went wrong');
            console.log(error)
        }
    },

    login: async (req, res) => {
        const {email, password} = req.body;
        try {
            const existUser = await users.findOne({email});
            if(!existUser){
                return res.status(404).json({message: "User don't exists"})
            }
            const isPasswordcrp = await bcryptjs.compare(password, existUser.password)
            if(!isPasswordcrp){
                return res.status(404).json({message: "Invalid credentials"})
            }
            res.status(200).json({result: existUser});
        } catch (error) {
            res.status(500).json('Something went wrong');
            console.log(error)
        }
    }
}

module.exports = {...userController}