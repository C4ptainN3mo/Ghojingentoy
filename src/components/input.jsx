import React from "react";

export default function Input({placeholder, onClick, onBlur, type = "text", name, value, id}) {
  return (
    <React.Fragment>
      <input
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        onBlur={onBlur}
        name={name}
        value={value}
        id={id}
        className="w-full max-h-full px-3 py-3 rounded-md bg-[#F1F1F1] text-[#A4A4A4]"
      />
    </React.Fragment>
  );
}
