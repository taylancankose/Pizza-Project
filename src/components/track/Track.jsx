import React, { useEffect, useState } from "react";
import MapView from "../mapView/MapView";

function Track() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      label: "Sipariş Alındı",
      step: 1,
    },
    {
      label: "Hazırlanıyor",
      step: 2,
    },
    {
      label: "Yola Çıktı",
      step: 3,
    },
    {
      label: "Teslim Edildi",
      step: 4,
    },
  ];

  useEffect(() => {
    let timer;
    if (activeStep < 5) {
      timer = setTimeout(() => {
        setActiveStep(activeStep + 1);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [activeStep]);

  const totalSteps = steps.length;

  const width = `${
    activeStep < 5 && (100 / (totalSteps - 1)) * (activeStep - 1)
  }%`;

  return (
    <div className="w-full my-6 m-auto justify-center items-center flex flex-col">
      <div className="flex w-8/12 justify-between relative">
        {steps.map(({ step, label }) => (
          <div key={step} className="relative">
            <div
              className={`md:w-10 md:h-10 w-8 h-8 flex items-center z-40 bg-gray-200 justify-center rounded-full -ml-1 ${
                activeStep >= step ? `bg-green-500` : `bg-gray-200`
              }`}
            >
              {activeStep >= step ? (
                <div className="text-green-500 font-bold font-barlow">✔</div>
              ) : (
                <div className="text-green-500 font-bold font-barlow"></div>
              )}
            </div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-sm">
              {label}
            </div>
          </div>
        ))}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 h-4 w-full bg-gray-200 rounded-full -z-10 `}
        >
          <div
            className="h-full bg-green-500 rounded-full "
            style={{ width, transition: "width 0.5s ease-in-out" }}
          ></div>
        </div>
      </div>
      <div className="w-9/12 h-full">
        <MapView />
      </div>
    </div>
  );
}

export default Track;
