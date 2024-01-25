const users = require('../models/userModel')
const mongoose = require('mongoose');

const updateController = {
    updateProfile: async (req, res) => {
        const _id = req.userId;
        const {name, password, contact} = req.body;

        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send('Please enter a valid id number');
        }

        try {
            const updateProfile = await users.findByIdAndUpdate(_id, { $set: { 'name': name, 'password': password, 'contact': contact }}, { new: true})
            res.status(200).json(updateProfile)
        } catch (error) {
            res.status(405).json({ message: error.message})
        }
    }
}

module.exports = {...updateController}