import React, { useEffect, useState } from 'react';
import axios from "axios";
const Countries = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, [])

  return (
    <div className="flex flex-col justify-center my-10">
      <h1 className="text-center text-3xl font-medium mb-10">Countries</h1>
      <div className="grid grid-cols-4 gap-4">
          {
            data.map((country) =>
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
              <img src={country.flags.png} className="rounded-lg"/>
            </div> )
          }
      </div>
    </div>
  );
};

export default Countries;
