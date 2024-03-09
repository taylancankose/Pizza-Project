import React from "react";
import ButtonComp from "../buttonComp/ButtonComp";

function BasketAmount({
  handleIncreaseAmount,
  handleDecreaseAmount,
  orderDetails,
}) {
  return (
    <div className="flex rounded-md justify-center md:justify-start mb-4">
      <ButtonComp
        disabled={orderDetails.amount === 1}
        onClick={handleDecreaseAmount}
        className={"bg-myBeige w-12 h-14 rounded-l-md z-10 font-bold"}
        title={"-"}
        name="decrease"
        dataCy="decrease"
      />
      <span
        data-cy="amount"
        className="w-12 h-14 text-center items-center justify-center flex border border-white bg-myBeige border-opacity-50 "
      >
        {orderDetails.amount}
      </span>
      <ButtonComp
        name="increase"
        onClick={handleIncreaseAmount}
        className="bg-myBeige w-12 h-14 rounded-r-md z-10 font-bold"
        title={"+"}
        dataCy="increase"
      />
    </div>
  );
}

export default BasketAmount;
