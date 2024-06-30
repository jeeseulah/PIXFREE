import React from "react";

const FormInput = ({ onKeyUp, onChange, type, value, placeholder }) => {
  return (
    <>
      <input
        onKeyUp={onKeyUp}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormInput;
