import React, { Component } from "react";

const Input = ({ name, value, label, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //   autoFocus
        value={value}
        onChange={onChange}
        //   ref={this.username}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
