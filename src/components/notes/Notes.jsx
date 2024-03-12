import React from "react";

function Notes({ data }) {
  return (
    <div className="justify-center max-w-72">
      <p>
        Boyut: <span className="font-bold capitalize">{data.size}</span>
      </p>
      <p>
        Malzemeler:{" "}
        {data.ingredients.map((item, i) => (
          <span key={i} className="font-bold">
            {item},{" "}
          </span>
        ))}
      </p>
      <p>
        Adet: <span className="font-bold">{data.amount}</span>
      </p>
      <p>
        Not: <span className="font-bold">{data.notes}</span>
      </p>
      <p>
        Sipariş Tarihi:{" "}
        <span className="font-bold">
          {new Date(data.createdAt).toISOString().split("T")[0]}{" "}
          {new Date(data.createdAt).toTimeString().split(" ")[0]}
        </span>
      </p>
    </div>
  );
}

export default Notes;
