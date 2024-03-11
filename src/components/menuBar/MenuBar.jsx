import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../assets/data";

function MenuBar() {
  return (
    <div className=" bg-white flex p-4 flex-wrap lg:items-center xl:justify-center xl:flex-nowrap">
      {products.map((element) => (
        <div
          key={element.id}
          className={`flex items-center lg:mr-20 m-4 ${
            element.title.includes("YENİ!") && "animate-pulse"
          }`}
        >
          <img src={element.imgSrc} className="mr-5" />
          <Link className="font-barlow text-myDarkGray font-medium text-lg">
            {element.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MenuBar;
