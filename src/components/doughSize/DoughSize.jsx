import React from "react";

function DoughSize({ handleSelectDoughSize }) {
  return (
    <div>
      <p className="text-xl text-myDarkGray font-semibold">
        Hamur Seç<span className="text-myRed">*</span>
      </p>
      <select
        name="hamur"
        data-cy="select-dough"
        onChange={handleSelectDoughSize}
        title="Hamur Kalınlığı"
        className="mt-4 bg-myBeige w-72 px-4 py-4 font-medium rounded-md"
      >
        <option className="mb-4" value="">
          --Hamur Kalınlığı Seç--
        </option>
        <option value="kalın">Kalın Kenar</option>
        <option value="ince">İnce Kenar</option>
      </select>
    </div>
  );
}

export default DoughSize;
