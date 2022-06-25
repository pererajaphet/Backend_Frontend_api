const { request } = require("express");
const db = require("../models");

const Car = require('../models/car.model');



exports.createCar = (req, res, next) => { 
    const car = new Car({
        brand: req.body.brand,
        horse_power: parseInt(req.body.horse_power),
        num_doors: parseInt(req.body.num_doors),
        model: req.body.model
    });
    console.log(car)
    car.save()
      .then(() => res.status(201).json({ message: 'Object saved !'}))
      .catch(error => res.status(400).json({ error }));
  }


  exports.getAllCars = (req, res, next) => {
    Car.find()
    .then(car => {res.status(200).json(car)
    console.log('done')})
    .catch(error => {res.status(400).json({ error })
    console.log('No Done')});
};


  exports.modifyCar = (req, res, next) => {
    Car.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Object updated !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  exports.deleteCar = (req, res, next) => {
    Car.deleteOne({ _id: req.params.id })
    .then(() => {res.status(200).json({ message: 'Object deleted !'})})
    .catch(error => res.status(400).json({ error }));
};

exports.getOneCar = (req, res, next) => {
    Car.findOne({ _id: req.params.id })
    .then(car => res.status(200).json(car))
    .catch(error => res.status(404).json({ error }));
};