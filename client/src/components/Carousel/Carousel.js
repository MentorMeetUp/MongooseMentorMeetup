import React from "react";
import { Carousel } from "react-bootstrap";
import Yoda from "./images/yoda.png";
import Miagi from "./images/miagi.png";
import MjKobe from "./images/mjkobe.png";
import Mickey from "./images/mickey.png";
import "./carousel.css";

const SlideShow = props => (
	
	<Carousel>

		<Carousel.Item>
			<img src={Yoda} width={900} height={500} alt="900x500 img" />
			<Carousel.Caption>
				<h3>Mentor MeetUp is a peer-to-peer platform for motivated learners and inspired teachers</h3>
			</Carousel.Caption>
		</Carousel.Item>

		<Carousel.Item>
			<img src={Miagi} width={900} height={500} alt="900x500 img" />
			<Carousel.Caption>
				<h2>Either free or prepaid, you can acquire new skills and meet liked-minded individuals.</h2>
			</Carousel.Caption>
		</Carousel.Item>

		<Carousel.Item>
			<img src={MjKobe} width={900} height={500} alt="900x500 img" />
			<Carousel.Caption>
				<h2>Everyone is good at something...</h2>
			</Carousel.Caption>
		</Carousel.Item>

		<Carousel.Item>
			<img src={Mickey} width={900} height={500} alt="900x500 img" />
			<Carousel.Caption>
				<h2>Share it</h2>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>

);
export default SlideShow;