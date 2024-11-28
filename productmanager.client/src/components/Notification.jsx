import PropTypes from "prop-types";
import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";
export class Notification extends Component {
  static propTypes = { text: PropTypes.string };

  render() {
    return (
      <div className="z-[60] mx-auto w-fit fixed inset-x-0 top-20 flex items-center ">
        <div className="bg-[#1EA566] px-6 py-4 rounded-3xl text-lg flex items-center text-white w-full animate__animated animate__fadeInDown">
          <div className="flex items-center justify-center mr-3">
            <FaCheck />
          </div>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Notification;
