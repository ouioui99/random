import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

import { getGeocode } from "../api/getGeocode";

export const TextInput = (props) => {
  const [referenceSite, setReferenceSiteInput] = useState("");

  useEffect(() => {
    console.log(Object.keys(props.referenceSitePosition).length);
    if (!Object.keys(props.referenceSitePosition).length) {
      setReferenceSiteInput("");
    }
  }, [props.referenceSitePosition]);

  const handleOnblur = (e) => {
    const address = e.target.value;
    //空文字判定
    if (address) {
      getGeocode({
        address: address,
      }).then((res) => {
        props.setReferenceSitePosition({
          lat: res.data.lat,
          lng: res.data.lng,
        });
      });
    }
  };

  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="referenceSite"
        label="基準地"
        name="referenceSite"
        autoComplete="name"
        autoFocus
        value={referenceSite}
        onChange={(e) => setReferenceSiteInput(e.target.value)}
        onBlur={(e) => handleOnblur(e)}
      />
    </>
  );
};
