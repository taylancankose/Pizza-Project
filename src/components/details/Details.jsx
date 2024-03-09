import React from "react";

function Details({ orderDetails, data }) {
  return (
    <div className="py-5">
      <p data-cy="pizza-name" className="my-2 mb-6 text-3xl font-semibold ">
        {orderDetails.pizzaName}
      </p>
      {/* Fiyat */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-4xl font-bold">{orderDetails.price}₺</p>
        <div className="flex w-24 justify-between text-myLightGray md:w-40">
          <p>{data.rating}</p>
          <p>({data.comments})</p>
        </div>
      </div>
      {/* Açıklama */}
      <p className=" text-myLightGray">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </div>
  );
}

export default Details;
