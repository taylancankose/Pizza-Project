import React from "react";

function ButtonComp({
  name,
  className,
  disabled,
  onClick,
  title,
  containerClass,
  dataCy,
}) {
  return (
    <div className={containerClass}>
      <button
        className={className}
        onClick={onClick}
        disabled={disabled}
        name={name}
        data-cy={dataCy}
      >
        {title}
      </button>
    </div>
  );
}

export default ButtonComp;
