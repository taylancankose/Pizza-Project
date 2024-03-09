import React from "react";
import ButtonComp from "../buttonComp/ButtonComp";

function Card({ children, btnClass, className, btnTitle }) {
  return (
    <div className={className}>
      {children}
      <ButtonComp title={btnTitle} className={btnClass} />
    </div>
  );
}

export default Card;
