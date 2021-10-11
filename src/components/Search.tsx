import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Search.module.css";
import { useRecoilState } from "recoil";
import { locationRecoilState, Location } from "@/lib/states";
import axios from "axios";
import AutocompleteLocation from "@/interfaces/autocompleteLocation";

interface Props {
  className: string;
}

export default function Search({ className }: Props) {
  const [locationState, setLocationState] = useRecoilState(locationRecoilState);
  const [textFieldValue, setTextFieldValue] = useState("");
  const [options, setOptions] = useState<AutocompleteLocation[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition((position) => {
              const location: Location = {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              };

              setLocationState(location);
            });
            //If granted then you can directly call your function here
            // } else if (result.state === "prompt") {
            //   console.log(result.state);
            // } else if (result.state === "denied") {
            //   //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  return (
    <div className={className}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        clearOnBlur={false}
        renderInput={(params) => (
          <TextField
            {...params}
            className={styles.search}
            fullWidth
            variant="outlined"
            label="🔎 Search place"
            value={textFieldValue}
            onChange={async (event) => {
              setTextFieldValue(event.target.value);

              const { data } = await axios.get(
                "http://localhost:3001/autocomplete",
                {
                  params: {
                    q: event.target.value,
                    lat: locationState.lat,
                    lon: locationState.lon,
                  },
                }
              );

              setOptions(data);
            }}
          />
        )}
      />
    </div>
  );
}
