const Joi = require('joi'); 

var myValidation =  (req:any, res:any, next:any) =>{
    /** check request validation */
    if(!req.params.seriesId && !req.body.seasonNumber) {
        throw new Error('Please pass all params value.')
    }
    /** joi validation */
    const schema = Joi.object({ 
        seriesId: Joi.number().integer().required(),
        seasonNumber:Joi.number().integer().required()
    });
    schema.validate(req.params);
    next()
}

module.exports ={
    my_Validation:myValidation
}