import React from "react";

function Ingredients({ handleSelectIngredient }) {
  const malzemeler = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Ançuez",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];
  return (
    <div className="py-5" data-cy="checkbox-container">
      <p className="text-myDarkGray font-semibold text-xl">Ek Malzemeler</p>
      <p className="my-4 text-myLightGray">
        En Fazla 10 malzeme seçebilirsiniz. 5₺
      </p>
      <div
        className="grid md:grid-cols-3 grid-cols-2"
        data-cy="check-ingredient"
      >
        {malzemeler.map((item, i) => (
          <label className="items-center flex" key={i}>
            <input
              id="default-checkbox"
              onChange={handleSelectIngredient}
              type="checkbox"
              value={item}
              name="ingredient"
              className="my-2 mr-2 h-8 w-8 outline-0 appearance-none bg-myBeige checked:bg-myYellow border-none rounded-sm"
            />

            <span className="font-bold text-myDarkGray text-md">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Ingredients;
