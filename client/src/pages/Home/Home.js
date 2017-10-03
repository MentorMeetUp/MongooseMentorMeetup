import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import Footer from "../../components/Footer";

class Home extends Component {
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

    if (!this.state.skills) {
      alert("Please enter a skill you'd like to search for");
    } else {

      this.setState({
        skills: ""
        
      });
    }

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
    <div>
      <Jumbotron>
        <h1 className="text-center">
          Mentor MeetUp
        </h1>
        <h3 className="text-center">
          Find 1-on-1 Instructors, Tutors & Mentors
        </h3>
      </Jumbotron>

      <div className="container">
        <div className="panel">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6"> 
              <form className="form">
              <label htmlFor="skills">Search for a Skill You'd Like to Learn</label>
                  <input
                    className="form-control"
                    value={this.state.skills}
                    name="skills"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search for a Skill"
                  />
                    <Link to={`/results/${this.state.skills}`}><button className="btn btn-primary btn-md" /*onClick={this.handleFormSubmit}*/>Submit</button></Link>
              </form>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>  
    );
  }
}

export default Home;

