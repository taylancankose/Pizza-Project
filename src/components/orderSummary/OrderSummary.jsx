import React from "react";

function OrderSummary({ data, className, style, style2 }) {
  return (
    <div className={className}>
      <p className={`${style} font-semibold text-xl`}>Sipariş Toplamı</p>
      <div
        className={`my-2 flex justify-between ${style} font-semibold text-lg`}
      >
        <p>Seçimler</p>
        <p>{data.ingredientsPrice}₺</p>
      </div>
      <div
        className={`my-2 flex justify-between font-semibold text-lg ${style2}`}
      >
        <p>Toplam</p>
        <p>{data.price}₺</p>
      </div>
    </div>
  );
}

export default OrderSummary;
