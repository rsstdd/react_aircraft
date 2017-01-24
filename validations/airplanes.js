const Joi = require('joi');

module.exports.post = {
  body: {
    name: Joi.string()
      .label('Name')
      .required()
      .trim(),

    yearInService: Joi.number()
      .integer()
      .min(0)
      .label('Year in Service')
      .required(),

    countryOfOrigin: Joi.string()
      .label('Country of Origin')
      .required()
      .trim(),

    operators: Joi.string()
      .label('Operators')
      .required()
      .trim(),

    maxSpeed: Joi.number()
      .integer()
      .min(0)
      .label('Max Speed')
      .required(),

    maxRange: Joi.number()
      .integer()
      .min(0)
      .label('Max Range')
      .required(),

    ceiling: Joi.number()
      .integer()
      .min(0)
      .label('Ceiling')
      .required(),

    engines: Joi.string()
      .label('Engines')
      .required()
      .trim()
  }
};

module.exports.patch = {
    body: {
      name: Joi.string()
        .label('Name')
        .trim(),

      yearInService: Joi.number()
        .integer()
        .label('Year in Service'),

      countryOfOrigin: Joi.string()
        .label('Country of Origin')
        .trim(),

      operators: Joi.string()
        .label('Country of Origin')
        .trim(),

      maxSpeed: Joi.number()
        .integer()
        .label('Max Speed'),

      maxRange: Joi.number()
        .integer()
        .label('Max Range'),

      ceiling: Joi.number()
        .integer()
        .label('Ceiling'),

      engines: Joi.string()
        .label('Engines')
        .trim()
    }
};
