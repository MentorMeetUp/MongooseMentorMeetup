import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";







const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1]
console.log(queryInput)




class Navbar extends Component {
  // Setting the component's initial state
  state = {
    skills: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

 if(queryInput) 
          {
            window.location.href = "/results/" + this.state.skills + "/#" +  queryInput
          }
        else {window.location.href = "/results/nonuser/" + this.state.skills }



    if (!this.state.skills) {
      alert("Please enter a skill you'd like to search for");
    } else {

      this.setState({
        skills: ""
        
      });
    }

  };


  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <strong>Mentor MeetUp</strong>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input
                className="form-control"
                value={this.state.skills}
                name="skills"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Search for a Skill"
              />
            </div>
          
               <button 
                  className="btn btn-primary btn-md" 
                  onClick={this.handleFormSubmit}><i className="fa fa-search" aria-hidden="true"></i></button>
          
          </form>

            <ul className="nav navbar-nav navbar-right">
              <li
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/home"
                    ? "active"
                    : ""
                }
              >
                <Link to="/">Home</Link>
              </li>
              <li className={window.location.pathname === "/form" ? "active" : ""}>
                <Link to="/form">Sign Up</Link>
              </li>
              <li className={window.location.pathname === "/login" ? "active" : ""}>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar;