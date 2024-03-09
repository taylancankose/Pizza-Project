import React from "react";

function Pill({ active, item, handleSelect }) {
  return (
    <button
      value={item.title}
      className={`flex w-48 mb-6 items-center justify-center p-4 mx-5 rounded-full ${
        active === item.title ? "bg-myDarkGray" : "bg-white"
      }`}
      key={item.id}
      name={item.title}
      onClick={() => handleSelect(item.title)}
      data-cy={item.title}
    >
      <img src={item.imgSrc} className="mr-4" name={item.title} />
      <p
        className={`font-medium font-barlow ${
          active === item.title ? "text-white" : "text-myDarkGray"
        }`}
      >
        {item.title}
      </p>
    </button>
  );
}

export default Pill;
