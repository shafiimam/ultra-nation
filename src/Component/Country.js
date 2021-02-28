import React from 'react';
import './Country.css';

const Country = (props) => {

    const { name,capital, flag, population } = props.country;
    const currency = props.country.currencies[0].name;
    return (
        <div className="countryStyle">
          <img className="flag" src={flag} alt="" />
          <h2>Country Name: {name}</h2>
          <h3>Capital: {capital} </h3>
          <h3>Currency: {currency}</h3>
          <h3>Population; {population} </h3>
        </div>
    );
};

export default Country;