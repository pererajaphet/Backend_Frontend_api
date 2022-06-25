module.exports = (app) => {
    const router = require("express").Router();
    const cars = require("../controllers/car.controller.js");

    router.post('/', cars.createCar);
    router.put('/:id', cars.modifyCar);
    router.delete('/:id', cars.deleteCar);
    router.get('/:id', cars.getOneCar);
    router.get('/', cars.getAllCars);
    
    app.use("/cars",router);
}