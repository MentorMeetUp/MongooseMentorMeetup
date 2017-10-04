import React from "react";
import {Thumbnail} from "react-bootstrap";


const NonCard = props => (
  <div>
      <Thumbnail src={props.photo} alt="User Photo">
      <ul>
        <li>
          <strong>Name:</strong> {props.firstName} {props.lastName}
        </li>
        <li>
          <strong>Skill:</strong> {props.skills.replace(/,/g, ", ")}
        </li>
        <li>
          <strong>Location:</strong> {props.city}, {props.state}
        </li>
        <li>
          <strong>Cost:</strong> {props.cost}
        </li><br></br>
        <li>
          <strong>About Me:</strong> {props.aboutMe}. 
        </li>
      </ul>
      </Thumbnail>
  </div>
);

export default NonCard;