
import "./App.css";
import "./Component/Country"
import { useEffect, useState } from "react";
import Country from "./Component/Country";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch(console.error());
  }, []);
  return (
    <div className="App">
      <h1>Country loaded:{countries.length}</h1>
      <div className="country">
      {
      countries.map((ct) => (
        <Country country={ct} key={ct.alpha3Code}></Country>
      ))
      }
      </div>
      
    </div>
  );
}

export default App;
