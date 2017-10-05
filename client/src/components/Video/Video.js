
import React, {Component} from 'react';
import "./Video.css";
class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://s3-us-west-2.amazonaws.com/camp47/landing.mp4'
        }
    }

    render () {
        return (
          <div id="banner">
            <video id="background-video" loop autoPlay muted playsInline>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </div>

        )
    }
};

export default Video;