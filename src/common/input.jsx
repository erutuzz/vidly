import React, { Component } from "react";

const Input = ({ name, value, label, error, onChange }) => {
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
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
