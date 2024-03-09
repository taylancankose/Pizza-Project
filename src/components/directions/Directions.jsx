import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import Delivery from "../../../Assets/mile2-aseets/icons/delivery.png";
import House from "../../../Assets/mile2-aseets/icons/house.png";

function Directions({ location, setRoutes, origin }) {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();
  useEffect(() => {
    if (!routesLibrary || !map) return;
    const options = {
      markerOptions: {
        icon: {
          path: Delivery,
          scale: 8,
          fillColor: "purple",
          fillOpacity: 1,
          strokeWeight: 0,
        },
      },
    };
    setDirectionsService(new routesLibrary.DirectionsService());

    setDirectionsRenderer(
      new routesLibrary.DirectionsRenderer({
        map,
        markerOptions: {
          icon: Delivery,
          fillOpacity: 1,
          strokeWeight: 0,
          scale: 8,
        },
      })
    );
  }, [routesLibrary, map]);
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: origin,
        destination: location,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response?.routes[0]?.legs[0]);
      });
  }, [directionsService, directionsRenderer]);

  return null;
}

export default Directions;
