import React from "react";

function PizzaSize({ handleSelectSize }) {
  return (
    <div>
      <p className="text-xl text-myDarkGray font-semibold">
        Boyut Seç<span className="text-myRed">*</span>
      </p>
      <div className="flex flex-col mt-5">
        <label>
          <input
            type="radio"
            name="boyut"
            value="küçük"
            className="mr-2 mb-4"
            onChange={handleSelectSize}
          />
          Küçük
        </label>
        <label>
          <input
            type="radio"
            name="boyut"
            value="orta"
            className="mr-2 mb-4"
            onChange={handleSelectSize}
          />
          Orta
        </label>
        <label>
          <input
            type="radio"
            name="boyut"
            value="büyük"
            className="mr-2 mb-4"
            onChange={handleSelectSize}
          />
          Büyük
        </label>
      </div>
    </div>
  );
}

export default PizzaSize;
