import React from "react";
import Select from "react-select";
import countryCodes from "../json/countryCodes.json";

const PruebaBuscador = () => {
  const options = [];

  const createOption = () => {
    for (let i in countryCodes) {
      options.push({ value: i, label: countryCodes[i] });
    }
  };

  createOption();

  return <Select className="selecBuscador" options={options} searchable placeholder="Select a Country"/>;
};

export default PruebaBuscador;
