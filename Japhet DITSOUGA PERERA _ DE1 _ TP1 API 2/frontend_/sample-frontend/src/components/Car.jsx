import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteCar, getCar, updateCar } from "../services/car.service";

export default function Car() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await getCar(id).then((res) => {
        setCar(res);
      });
    }

    fetchData();
  }, [id]);

  function handleChange(e) {
    console.log(e.target);
    setCar({ ...car, [e.target.name]: e.target.value });
  }
  function updateCarForm(e) {
    e.preventDefault();
    updateCar(id, car);
    setUpdate(!update);
  }

  function handleUpdate() {
    setUpdate(!update);
  }

  function handleDelete() {
    deleteCar(id);
  }

  return (
    <div>
      <div>
        {!update ? (
          <form onSubmit={updateCarForm}>
            <fieldset>
              <legend>Car's informations</legend>
              <p>Brand : {car.brand}</p>
              <p>model : {car.model}</p>
              <p>horse_power : {car.horse_power}</p>
              <p>num_doors : {car.num_doors}</p>
              <input
                type="button"
                value="Change car's informations"
                onClick={handleUpdate}
              />
              <Link to="/">
                <input type="button" value="Delete" onClick={handleDelete} />
              </Link>
            </fieldset>
          </form>
        ) : (
          <form onSubmit={updateCarForm}>
            <fieldset>
              <legend>Update this car</legend>
              <label htmlFor="brand">Brand : </label>

              <input
                id="brand"
                type="text"
                name="brand"
                value={car?.brand}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="model">Model : </label>

              <input
                id="model"
                type="text"
                name="model"
                value={car?.model}
                onChange={handleChange}
              />
              <br />
              <br />

              <label htmlFor="horse_power">Horse Power : </label>
              <input
                id="horse_power"
                type="number"
                name="horse_power"
                value={car?.horse_power}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="num_doors" id="num_doors">
                Number of Doors :{" "}
              </label>

              <select
                id=""
                name="num_doors"
                value={car?.num_doors}
                onChange={handleChange}
              >
                <option value=" ">please select</option>
                <option value="2">2</option>
                <option value="4">4</option>
              </select>
              <br />
              <br />
              <input type="submit" value="Update" onSubmit={updateCarForm} />
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
}
