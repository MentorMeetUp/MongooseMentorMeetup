import React, { Component } from "react";
import Footer from "../../components/Footer";
import Video from "../../components/Video";
import "./Home.css";
import { Link } from "react-router-dom";

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1]
console.log(queryInput)


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
      // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
    <div>
<div>
    <Video/>
        </div>
      


      <div className="container ">
        <div >
          <div >
            <div ></div>
            <div > 
            <div className="movement"> 

<h1 className="text-center ">
         Mentor MeetUp
        </h1>
        <h3 className="text-center">
          Find 1-on-1 Instructors, Tutors & Mentors
        </h3>
        <div className="row">
          <div className="col-sm-3"></div>
            <div className="col-sm-6">
            <form className="form">
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
                <p><Link to="/form"><strong>Sign Up!</strong></Link> | <Link to="/login"><strong>Log-In</strong></Link>                   <button 
                      className="btn btn-primary btn-md" 
                      onClick={this.handleFormSubmit}>Submit</button></p>

              
              </form>
          </div>
        </div>
</div>
              
            </div>
          </div>
        </div>
      </div>
      {/* <SlideShow />*/}
      <Footer />
    </div>  
    );
  }
}

export default Home;

