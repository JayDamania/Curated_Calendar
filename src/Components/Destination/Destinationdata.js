import { Component } from "react";
import "./Destination.css";
import descimg1 from "../Asset/1.jpg";
import descimg2 from "../Asset/2.jpg";
import descimg3 from "../Asset/3.jpg";
import descimg4 from "../Asset/4.jpg";
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
