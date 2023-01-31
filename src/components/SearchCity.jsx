import React from "react";
import InputCountry from "./InputCountry";

const SearchCity = ({ setcity, setcityCode }) => {
  const handledSubmit = (e) => {
    e.preventDefault();
    if (!e.target[0].value) swal("Please, enter a City.");
    if (e.target[0].value && !isNaN(Number(e.target[0].value))) swal("Please enter only unaccented alphabetical letters, A–Z or a–z.");
    if (!e.target[1].value) swal("Please, select a Country.");
    if (e.target[0].value && e.target[1].value && isNaN(Number(e.target[0].value))) {
      setcity(e.target[0].value.toUpperCase());
      setcityCode(e.target[1].value);
      e.target[0].value = "";
      e.target[1].value = "";
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setcity(false);
  };

  return (
    <div className="searchbox">
      <p>Take a look in another city</p>
      <form className="searchbox__form" onSubmit={handledSubmit}>
        <input type="text" placeholder="City Name..." />
        <InputCountry />
        <button>Search</button>
        <button onClick={reset}>Reset to my location</button>
      </form>
    </div>
  );
};

export default SearchCity;
