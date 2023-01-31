import React from "react";
import countryCodes from "../json/countryCodes.json";

const InputCountry = () => {
  const listItem = () => {
    const key = Object.keys(countryCodes);

    return key.map((e) => (
      <option key={e} value={e}>
        {countryCodes[e]}
      </option>
    ));
  };

  return (
    <select className="searchbox__form--select">
      <option className="defaultOption" value="" hidden>
        --Select a Country--
      </option>
      {listItem()}
    </select>
  );
};

export default InputCountry;
