import React from "react";

const FormRow = ({ htmlFor, label, children }) => {
  return (
    <div className="form-group row">
      <label htmlFor={htmlFor} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        {children}
      </div>
    </div>
  );
}

export default FormRow;
