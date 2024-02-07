import React from "react";
import { Autocomplete, TextField } from "@mui/material";
const Select = () => {
  const options = ["The Godfather", "Pulp Fiction"];
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        sx={{ width: 300 }}
        options={options}
        renderInput={(params) => <TextField {...params} label="Kitoblar" />}
      />
    </>
  );
};

export default Select;
