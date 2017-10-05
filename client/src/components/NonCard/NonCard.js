import React from "react";
import {Thumbnail} from "react-bootstrap";
import "./NonCard.css";


const NonCard = props => (
  <div>
      <Thumbnail src={props.photo} alt="User Photo" className="card-border">
      <ul>
        <li className="text-center">
           <strong>{props.firstName} {props.lastName}</strong>
        </li>
        <div className="skill">
        <li>
          <strong>Skill(s): </strong>{props.skills.replace(/,/g, ", ")}
        </li>
        <li>
          <strong>Location:</strong> {props.city}, {props.state}
        </li>
        <li>
          <strong>Cost:</strong> {props.cost}
        </li>
        </div>
        <li><br></br>
          <strong>About Me:</strong> <em>{props.aboutMe}.</em>
        </li>
      </ul>
      </Thumbnail>
  </div>
);

export default NonCard;