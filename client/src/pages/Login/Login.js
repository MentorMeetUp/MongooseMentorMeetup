import React, { Component } from "react";
import API from "../../utils/API";
import "./Login.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

class Login extends Component {
  
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
  
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    
    event.preventDefault();

    if (!this.state.email || !this.state.password) {
      alert("Please fill out all fields")
      return;
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password`
      )
      return;
    } 

    else {

      this.setState({
        email: this.state.email,
        password: this.state.password
      });
    }

 API.signIn(this.state.email)
      .then(res => {
        console.log(res.data)
        if(this.state.email===res.data[0].email && this.state.password===res.data[0].password) 
          {
            window.location.href = "/home#" + res.data[0]._id
          }
        else if (this.state.email!==res.data[0].email || this.state.password!==res.data[0].password)
          {
            alert("Your email or password is invalid")
          }
        })

  };

  

  render() {
 
    return (
      <div className="container container-fixed">
        <div className ="panel">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">         
            <legend>
              <h1>Log-In!</h1>

            </legend>
            <form className="form">
              <label htmlFor="email">E-mail:</label>
              <input
                className="form-control"
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Email"
              />
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
              />
              <p>Not registered yet? <Link to="/form"><strong>Sign Up!</strong></Link></p>
              <button className="btn btn-primary btn-md btn-move" onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;

