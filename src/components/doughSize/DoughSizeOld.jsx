import React from "react";

function DoughSize({ handleSelectDoughSize }) {
  return (
    <div>
      <p className="text-xl text-myDarkGray font-semibold">
        Hamur Seç<span className="text-myRed">*</span>
      </p>
      <select
        onChange={handleSelectDoughSize}
        title="Hamur Kalınlığı"
        className="mt-4 border border-myDarkGray font-medium"
      >
        <option value="">Hamur Kalınlığı</option>
        <option value="kalın">Kalın Kenar</option>
        <option value="ince">İnce Kenar</option>
      </select>
    </div>
  );
}

export default DoughSize;
