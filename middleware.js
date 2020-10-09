"use strict";
var Joi = require('joi');
var myValidation = function (req, res, next) {
    /** check request validation */
    if (!req.params.seriesId && !req.body.seasonNumber) {
        throw new Error('Please pass all params value.');
    }
    /** joi validation */
    var schema = Joi.object({
        seriesId: Joi.number().integer().required(),
        seasonNumber: Joi.number().integer().required()
    });
    schema.validate(req.params);
    next();
};
module.exports = {
    my_Validation: myValidation
};
