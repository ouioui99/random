import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const GenreCodeSelector = (props) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="genreSelector">ジャンル</InputLabel>
      <Select
        labelId="genreSelectorLabel"
        id="genreSelector"
        label="genreSelector"
        onChange={(e) => props.setGenreCode(e.target.value)}
        value={props.genreCode}
        defaultValue=""
        sx={{ border: 0.5 }}
      >
        <MenuItem value="" selected>
          指定なし
        </MenuItem>
        <MenuItem value="G001">居酒屋</MenuItem>
        <MenuItem value="G002">ダイニングバー・バル</MenuItem>
        <MenuItem value="G003">創作料理</MenuItem>
        <MenuItem value="G004">和食</MenuItem>
        <MenuItem value="G005">洋食</MenuItem>
        <MenuItem value="G006">イタリアン・フレンチ</MenuItem>
        <MenuItem value="G007">中華</MenuItem>
        <MenuItem value="G008">焼肉・ホルモン</MenuItem>
        <MenuItem value="G017">韓国料理</MenuItem>
        <MenuItem value="G009">アジア・エスニック料理</MenuItem>
        <MenuItem value="G010">各国料理</MenuItem>
        <MenuItem value="G011">カラオケ・パーティ</MenuItem>
        <MenuItem value="G012">バー・カクテル</MenuItem>
        <MenuItem value="G013">ラーメン</MenuItem>
        <MenuItem value="G016">お好み焼き・もんじゃ</MenuItem>
        <MenuItem value="G014">カフェ・スイーツ</MenuItem>
        <MenuItem value="G015">その他グルメ</MenuItem>
      </Select>
    </FormControl>
  );
};
