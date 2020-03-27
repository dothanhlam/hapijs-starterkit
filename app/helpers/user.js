'use strict';
const Joi = require('joi');

// Helper method for finding user details can be called from web and mobile api controller.
exports.findUserDetails = async (userId)=>{
    return new Promise(async (resolve,reject)=>{
        try {
         //   let userDetails = await User.findOne({_id : Mongoose.Types.ObjectId(userId)},'-password -salt -__v -resetPasswordExpires -resetPasswordToken');
            const userDetails = [{}];
         return resolve(userDetails);
        } catch (error) {
            return reject(error);
        }
    }); 
};