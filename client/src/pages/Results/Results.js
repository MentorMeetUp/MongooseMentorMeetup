import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Results.css";
import API from "../../utils/API";
import Card from "../../components/Card";

class Results extends Component {
  state = {
    skills: []
  };

  componentDidMount() {
    this.loadResults();
  }

  loadResults = () => {
    API.getUserSkill(this.props.match.params.skill)
    .then(res => this.setState({ skills: res.data }))
    .catch(err => console.log(err));
  };

  	render() {
	    return (
			<div className="container">
              {this.state.skills.length ? (
                <div>
                {this.state.skills.map(result => (
                  <Card
                    key={result.id}
                    firstName={result.firstName}
                    lastName={result.lastName}
                    photo={result.photo}
                    city={result.city}
                    state={result.state}
                    skills={result.skills} 
                  />
                ))}
                </div>
            ) : (
              <h3>No mentors for that skill yet!</h3>
            )}
			</div>                  
		);
	}
}



// class Results extends Component {
//   state = {
//     skill: {}
//   };
 
//   componentDidMount() {
//     API.getUserSkill(this.props.match.params.skill)
//       .then(res => console.log({ skill: res.data }))
//       .catch(err => console.log(err));
//   }
  

//   	render() {
// 	    return (
// 			<div className="container">
// 			    <h1>Results Page  </h1>
//           <Card />
// 			</div>                  
// 		);
// 	}
// }                 

export default Results;