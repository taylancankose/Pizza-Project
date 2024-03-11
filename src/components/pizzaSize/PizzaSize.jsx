import React from "react";

function PizzaSize({ handleSelectSize, orderDetails }) {
  return (
    <div>
      <p className="text-xl text-myDarkGray font-semibold">
        Boyut Seç
        {orderDetails ? null : <span className="text-myRed">*</span>}
      </p>
      <div className="flex mt-5">
        <label>
          <button
            name="boyut"
            value="s"
            className={`mr-4 mb-4 rounded-full h-14 w-14 font-barlow font-medium ${
              orderDetails === "s" ? "bg-myYellow " : "bg-myBeige "
            }`}
            onClick={handleSelectSize}
          >
            S
          </button>
        </label>
        <label>
          <button
            data-cy="m-food-size"
            name="boyut"
            value="m"
            className={`mr-4 mb-4 rounded-full h-14 w-14 font-barlow font-medium ${
              orderDetails === "m" ? "bg-myYellow " : "bg-myBeige "
            }`}
            onClick={handleSelectSize}
          >
            M
          </button>
        </label>
        <label>
          <button
            name="boyut"
            value="l"
            className={`mr-4 mb-4 rounded-full h-14 w-14 font-barlow font-medium ${
              orderDetails === "l" ? "bg-myYellow " : "bg-myBeige "
            }`}
            onClick={handleSelectSize}
          >
            L
          </button>
        </label>
      </div>
    </div>
  );
}

export default PizzaSize;
