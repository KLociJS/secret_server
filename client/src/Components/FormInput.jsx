import React from "react";

function FormInput({
  name,
  label,
  value,
  onChange,
  hasError,
  errorMessage,
  placeholder,
  type = "text",
}) {
  // Form input component with error handling
  return (
    <div className='input-container'>
      <label htmlFor={name} className={hasError ? "error" : ""}>
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={hasError ? "error" : ""}
      />

      <p className='error-msg'>{hasError ? errorMessage : ""}</p>
    </div>
  );
}

export default FormInput;
