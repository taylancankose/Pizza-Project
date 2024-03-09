import React from "react";

function OrderSummary({ orderDetails }) {
  return (
    <div className=" w-full m-10 mb-14">
      <p className="text-myDarkGray font-semibold text-xl">Sipariş Toplamı</p>
      <div className="my-2 flex justify-between text-myDarkGray font-semibold text-lg">
        <p>Seçimler</p>
        <p>{orderDetails.ingredientsPrice}₺</p>
      </div>
      <div className="my-2 flex justify-between text-myRed font-semibold text-lg">
        <p>Toplam</p>
        <p>{orderDetails.price}₺</p>
      </div>
    </div>
  );
}

export default OrderSummary;
