import React from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "../common/select";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    // const errors = this.validate(data);
    this.setState({ data, errors: errors || {} });
    // setTimeout(() => {
    //   this.setState({ data });
    //   const errors = this.validate();
    //   this.setState({ errors: errors || {} });
    // }, 0);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const username = document.getElementById("uesrname").value;
    // const username = this.username.current.value;
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        value={data[name]}
        type={type}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
}

export default Form;
