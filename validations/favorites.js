const Joi = require('joi');

module.exports.post = {
  body: {
    aircraftId: Joi.number()
      .integer()
      .min(0)
      .label('Aircraft ID must be an integer')
  }
};

module.exports.delete = {
  body: {
    aircraftId: Joi.number()
      .integer()
      .min(0)
      .label('Aircraft ID must be an integer')
  }
};
