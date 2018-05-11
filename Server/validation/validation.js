var Joi = require('joi');



exports.singleEntry = {
    query: {
        id: Joi.string().required()
    }
}


exports.entries = {
    query: {
        page: Joi.number()
    }
}

exports.auth = {
    body: {
        id_token: Joi.string()
    }
};

exports.login = {
    body: {
        email: Joi.string().email().required(),
        sub: Joi.string().required(),
        name: Joi.string().required(),
        // TODO ADD tid and aud to general configration, maybe .env file
        tid: Joi.valid("9b9eff0c-c111-4c50-ac2a-fe985fbb027d").
        options({
            language: {
                any: {
                    allowOnly: 'is not correct!'
                },
                label: 'tid'
            }
        }),
        aud: Joi.valid("dead4718-7c3e-458b-a3fc-6b8c654a5b5b").
        options({
            language: {
                any: {
                    allowOnly: 'is not correct!'
                },
                label: 'aud'
            }
        })
    }
};


exports.register = {
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
        password_confirmation: Joi.string().required().valid(Joi.ref('password'))
    }
};

exports.recover = {
    body: {
        email: Joi.string().email().required()
    }
};


exports.entry = {
    body: {
        title: Joi.string().max(100).required(),
        department: Joi.string().required(),
        textData: Joi.string().min(50).required()
    }
}