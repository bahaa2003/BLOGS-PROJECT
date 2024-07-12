const joi =require("joi");

module.exports={
    addUserSchema:{
        body:joi.object().required().keys({
            name : joi.string().required(),
            email : joi.string().required().email(),
            password : joi.string().required(),
            age : joi.number().required().min(20).max(60),
            location : joi.string().required()
        })
    },
        updateUserSchema:{
            params:joi.object().required().keys({
                id:joi.string()
            }),
            body:joi.object().required().keys({
                name : joi.string().required(),
                email : joi.string().required().email(),
                password : joi.string().required(),
                age : joi.number().required(),
                location : joi.string().required()
            })
        },
        deleteUserSchema:{
            params:joi.object().required().keys({
                id:joi.string()
            }),
    }
}