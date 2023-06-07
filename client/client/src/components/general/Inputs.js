import React from "react";
import propTypes from "prop-types";

const Inputs = ({ type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <div className="form-group">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
Inputs.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func.isRequired,
};
export default Inputs;
