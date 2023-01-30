import React from "react";

const SearchCity = ({ setcity }) => {
  const handledSubmit = (e) => {
    e.preventDefault();
    setcity(e.target[0].value.toUpperCase());
    e.target[0].value = "";
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
        <button>Search</button>
        <button onClick={reset}>Reset to my location</button>
      </form>
    </div>
  );
};

export default SearchCity;
