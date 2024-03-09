import { APIProvider, Map } from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";
import Directions from "../directions/Directions";

function MapView() {
  const [location, setLocation] = useState();
  const [routes, setRoutes] = useState();
  const [origin, setOrigin] = useState("İzmir Yüksek Teknoloji Enstitüsü");

  useEffect(() => {
    const getPosition = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0,
        }
      );
    };
    getPosition();
  }, []);
  const DynamicDirections = () => (
    <Directions
      location={location}
      routes={routes}
      setRoutes={setRoutes}
      origin={origin}
      setOrigin={setOrigin}
    />
  );
  useEffect(() => {
    setTimeout(() => {
      setOrigin(location);
    }, 30000);

    return DynamicDirections;
  }, [location]);

  return (
    <div>
      <APIProvider apiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}>
        <Map className="md:h-124 md:w-136 h-72 w-6/6" defaultCenter={location}>
          <DynamicDirections />
        </Map>
      </APIProvider>

      <div className="p-10 border-white border mt-10 rounded-lg">
        {routes?.distance?.text !== "1 m" ? (
          <>
            <p className="text-white font-barlow font-semibold text-lg">
              Mesafe: {routes?.distance?.text}
            </p>
            <p className="text-white font-barlow font-semibold text-lg mt-2">
              Tahmini Varış Süresi: {routes?.duration?.text}
            </p>
          </>
        ) : (
          <p className="text-white font-barlow font-semibold text-lg text-center">
            ✨ Siparişiniz teslim edildi ✨
          </p>
        )}
      </div>
    </div>
  );
}

export default MapView;
