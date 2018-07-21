'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var dietSelectionSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the restaurent or any food chemical'
  },
  description: {
    type: String,
    required: 'Enter the description of the diet item'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['safe', 'unsafe', 'dont know']
    }],
    default: ['dont know']
  }
});

module.exports = mongoose.model('DietSchema', dietSelectionSchema);