import { atom } from "recoil";

export interface Location {
  lat: number | null;
  lon: number | null;
}

export const locationRecoilState = atom({
  key: "location",
  default: {
    lat: null,
    lon: null,
  } as Location,
});

export const historyLocationRecoilState = atom({
  key: "historyLocation",
  default: [] as Location[],
});
