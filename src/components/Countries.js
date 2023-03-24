import React, { useEffect, useState } from 'react';
import axios from "axios";

const Countries = () => {
  const [data, setData] = useState([])
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, [])

  return (
    <div className="flex flex-col justify-center my-10">
      <h1 className="text-center text-3xl font-medium mb-10">Countries</h1>
      <div className="flex justify-between bg-gray-500 w-full rounded-lg px-10 my-6 py-3">
        <input type="range" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} min="1" max="250" id="" />
        {
          radios.map((continent) =>
          <div className="flex gap-2 items-center">
            <input type="radio" id={continent} name="contientRadio" onChange={(e) => setSelectedRadio(e.target.id)}/>
            <label className="text-lg text-gray-300 cursor-pointer" htmlFor={continent}>{continent}</label>
          </div>
          )
        }
      </div>
      <div className="grid md:grid-cols-4 gap-4">
          {
            data
            .filter((country) => country.continents[0].includes(selectedRadio))
            .slice(0, rangeValue)
            .map((country) =>
            <div className="col-span-1 bg-gray-200 p-4 grid rounded-lg gap-2">
              <h2 className="text-center font-medium text-xl">
                {country.name.common}
              </h2>
              <p>
                Capital: {country.capital}
              </p>
              <p>
                Population: {country.population}
              </p>
              <img src={country.flags.png} className="rounded-lg" alt={"drapeau " + country.name.common}/>
            </div> )
          }
      </div>
    </div>
  );
};

export default Countries;
