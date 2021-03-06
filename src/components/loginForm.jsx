import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "../common/form";
// import * as loginService from "../services/authService";
import auth from "../services/authService";

class LoginForm extends Form {
  //   username = React.createRef();
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  doSubmit = async () => {
    // call the server
    // console.log("submitted");
    try {
      const { data } = this.state;
      // const a = await login(data.username, data.password);
      // console.log(a);
      await auth.login(data.username, data.password);
      // this.props.history.push("/");
      const { state } = this.props.location;
      // console.log(this.state);
      // console.log(this.props);
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/movies" />;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
