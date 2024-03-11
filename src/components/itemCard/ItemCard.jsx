import React from "react";
import { useNavigate } from "react-router-dom";

function ItemCard({ data }) {
  const navigate = useNavigate();
  const handleOrderPage = () => {
    navigate(`/order/${data.id}`, {
      state: data,
    });
  };
  return (
    <div
      className="p-8 bg-white m-6 cursor-pointer"
      key={data.id}
      onClick={handleOrderPage}
      data-cy="food-div"
    >
      <img src={data.imgUrl} className="w-72 h-72 object-cover" />
      <p
        data-cy="food-name"
        className="mt-4 font-barlow font-semibold text-xl text-myDarkGray"
      >
        {data.name}
      </p>
      <div className="mt-3 flex justify-between items-center font-barlow">
        <p className="text-myLightGray font-semibold">{data.rating}</p>
        <p className="text-myLightGray font-semibold">({data.comments})</p>
        <p className="text-myDarkGray font-bold text-xl">{data.price}₺</p>
      </div>
    </div>
  );
}

export default ItemCard;
