const Joi = require('@hapi/joi')

const loginValidation = () => {
    const schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };
    return Joi.validate(data,schema);
};