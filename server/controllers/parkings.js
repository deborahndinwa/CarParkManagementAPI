const Parking = require('../../models').Parking;
module.exports = {
  create(req, res) {
    return Parking
    .findOne({
      where: {
        vehicleId: req.params.vehicleId,
        parkingSlotId: req.params.parkingSlotId
      }
    })
    .then(parking => {
      console.log('parking', parking)
      if(parking){
        return res.status(409).send({
          message: 'Parking record already exists, try another slot '
        })
      }
      else{
      Parking
      .create({
        parkingSlotId: req.params.parkingSlotId,
        vehicleId: req.params.vehicleId,
      })
      .then(parking => res.status(201).send(parking))

      }
    })
     .catch(error => res.status(400).send(error));
  }, 
};