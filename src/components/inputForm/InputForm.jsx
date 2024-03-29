import React from "react";

function InputForm({
  value,
  name,
  type,
  labelTitle,
  handleChange,
  placeholder,
}) {
  return (
    <div className="py-5 ">
      <label className="font-semibold text-xl text-myDarkGray">
        {labelTitle}
      </label>
      {type === "input" ? (
        <>
          <input
            name={name}
            data-cy="name-input"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={`my-6 w-full p-3 rounded-md placeholder:text-sm 
            placeholder:text-myDarkGray placeholder:p-2
            ${
              value.length < 4 ? "border border-myRed bg-red-100" : "bg-myBeige"
            } `}
          />
          {value.length < 4 && (
            <p className={`mb-4 font-extrabold font-barlow text-myRed`}>
              En az 3 karakter girmelisiniz.
            </p>
          )}
        </>
      ) : (
        type === "text-area" && (
          <textarea
            name={name}
            data-cy="textarea-notes"
            onChange={handleChange}
            placeholder={placeholder}
            className="my-6 bg-myBeige w-full p-3 rounded-md   placeholder:text-sm  placeholder:text-myDarkGray placeholder:p-2"
          >
            {value}
          </textarea>
        )
      )}
      <hr className="border-myLightGray opacity-50" />
    </div>
  );
}

export default InputForm;
