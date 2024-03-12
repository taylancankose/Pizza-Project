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

  useEffect(() => {
    setTimeout(() => {
      setOrigin(location);
    }, 30000);
  }, [location]);

  return (
    <div className="justify-center items-center m-auto flex flex-col mt-20">
      <APIProvider apiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}>
        <Map className="md:h-124 md:w-5/6 h-72 w-72" defaultCenter={location}>
          <Directions
            location={location}
            routes={routes}
            setRoutes={setRoutes}
            origin={origin}
            setOrigin={setOrigin}
          />
        </Map>
      </APIProvider>

      <div className="p-10 border-myRed border mt-10 rounded-lg">
        {routes?.distance?.text !== "1 m" ? (
          <>
            <p className="text-myDark font-barlow font-semibold text-lg">
              Mesafe: {routes?.distance?.text}
            </p>
            <p className="text-myDark font-barlow font-semibold text-lg mt-2">
              Tahmini Varış Süresi: {routes?.duration?.text}
            </p>
          </>
        ) : (
          <p className="text-myDark font-barlow font-semibold text-lg text-center">
            ✨ Siparişiniz teslim edildi ✨
          </p>
        )}
      </div>
    </div>
  );
}

export default MapView;
