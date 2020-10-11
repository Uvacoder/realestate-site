import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `400px` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `400px`, width: "800px" }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 38.627003, lng: -90.199402 }}
  >
    {props.isMarkerShown && (
      <>
        <Marker position={{ lat: 38.77808, lng: -90.72571 }} />
        <Marker position={{ lat: 38.83328, lng: -90.49112 }} />
      </>
    )}
  </GoogleMap>
));

export default MyMapComponent;
