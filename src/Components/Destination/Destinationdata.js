import { Component } from "react";
import "./Destination.css";
class Destinationdata extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="desc-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img1" src={this.props.img1} />
          <img alt="img2" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default Destinationdata;
