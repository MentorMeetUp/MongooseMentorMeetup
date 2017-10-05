import React from "react";
import {Thumbnail} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./Card.css";


const Card = props => (
  <div>
      <Thumbnail src={props.photo} alt="User Photo" className="card-border">
      <ul>
        <li className="text-center">
          <strong> {props.firstName} {props.lastName}</strong>
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
          <strong>About Me:</strong> <em>{props.aboutMe}.</em> 
        </li>
      </ul>
      <p>
        <Button bsStyle="primary" bsSize="xsmall"><span className="glyphicon glyphicon-envelope">&nbsp;</span>{props.email}</Button>  
      </p>
      </Thumbnail>
  </div>
);

export default Card;