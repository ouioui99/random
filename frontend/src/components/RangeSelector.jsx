import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const RangeSelector = (props) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="range">検索範囲</InputLabel>
      <Select
        labelId="range"
        id="range"
        label="range"
        onChange={(e) => props.setRange(e.target.value)}
        value={props.range}
        defaultValue=""
        sx={{ border: 0.5 }}
      >
        <MenuItem value="1">300m</MenuItem>
        <MenuItem value="2">500m</MenuItem>
        <MenuItem value="3">1000m</MenuItem>
        <MenuItem value="4">2000m</MenuItem>
        <MenuItem value="5">3000m</MenuItem>
      </Select>
    </FormControl>
  );
};
