const  mongoose  = require('mongoose');

const carSchema = mongoose.Schema({
    brand: {type: String},
    horse_power: {type: Number},
    num_doors: {type: Number},
    model: {type: String}
}, {
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }
  });

module.exports = mongoose.model('Car', carSchema);

