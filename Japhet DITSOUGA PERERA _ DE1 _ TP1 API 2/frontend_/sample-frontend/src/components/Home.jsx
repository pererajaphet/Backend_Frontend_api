import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addCar, getCars } from "../services/car.service";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({});

  useEffect(() => {
    async function fetchData() {
      await getCars().then((res) => {
        setCars(res);
      });
    }

    fetchData();
  }, [car]);

  function addCarForm(e) {
    e.preventDefault();
    const data = {
      brand: e.target.brand.value,
      horse_power: e.target.horse_power.value,
      num_doors: e.target.num_doors.value,
      model: e.target.model.value,
    };
    addCar(data);
    setCar(data);
  }

  return (
    <div>
      <div>
        <h1> My Cars</h1>
        <h5>
          <i>
            {" "}
            You have below the list of the cars present in my database.
            <br /> You can add as many as you want. If you decide to add one, it
            will appear in the list of cars below.
            <br />
            <br />
            If you click on one of the cars below, you will see its information.
            <br /> Then you can either update the information of the selected
            car or remove the car from the database completely.
          </i>
        </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            maxHeight: "200px",
          }}
        >
          {cars.map((car) => (
            <Link to={`/cars/${car._id}`} key={car._id}>
              {car.brand}
            </Link>
          ))}
        </div>
      </div>
      <br />

      <form onSubmit={addCarForm}>
        <fieldset>
          <legend>Add new car</legend>
          <label htmlFor="brand">Brand : </label>

          <input id="brand" type="text" name="brand" />
          <br />
          <br />
          <label htmlFor="model">Model : </label>

          <input id="model" type="text" name="model" />
          <br />
          <br />

          <label htmlFor="horse_power">Horse Power : </label>
          <input id="horse_power" type="number" name="horse_power" />
          <br />
          <br />
          <label htmlFor="num_doors" id="num_doors">
            Number of Doors :{" "}
          </label>

          <select id="" name="num_doors">
            <option value=" ">please select</option>
            <option value="2">2</option>
            <option value="4">4</option>
          </select>
          <br />
          <br />
          <input type="submit" value="ADD" onSubmit={addCarForm} />
        </fieldset>
      </form>
    </div>
  );
}
