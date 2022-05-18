import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const BudgetCodeSelector = (props) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="budgetSelector">予算（ディナー基準）</InputLabel>
      <Select
        labelId="budgetSelectorLabel"
        id="budgetSelector"
        label="budgetSelector"
        onChange={(e) => props.setBugetCode(e.target.value)}
        defaultValue=""
      >
        <MenuItem selected value="">
          指定なし
        </MenuItem>
        <MenuItem value="B009,B010">~1000 円</MenuItem>
        <MenuItem value="B011">1001~1500 円</MenuItem>
        <MenuItem value="B001">1501~2000 円</MenuItem>
        <MenuItem value="B002,B003">2001~4000 円</MenuItem>
        <MenuItem value="B008,B004">4001~7000 円</MenuItem>
        <MenuItem value="B005">7001~10000 円</MenuItem>
        <MenuItem value="B006">10001~15000 円</MenuItem>
        <MenuItem value="B012">15001~20000 円</MenuItem>
        <MenuItem value="B013">20001~30000 円</MenuItem>
        <MenuItem value="B014">30001 円~</MenuItem>
      </Select>
    </FormControl>
  );
};
