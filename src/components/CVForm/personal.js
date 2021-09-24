import React, { Component } from "react";
import CVPreview from "../CVPreview/CVPreview";
import Preview from "../CVPreview/";
import uniqid from "uniqid";

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: { value: "", id: uniqid() },
      lastName: { value: "", id: uniqid() },
      phone: { value: "", id: uniqid() },
      address: { value: "", id: uniqid() },
    };
  }

  updateElement = (e) => {
    const element = e.target.name;
    this.setState({
      element: {
        value: e.target.value,
        id: this.state.e.target.id,
      },
    });
  };

  render() {
    return;
  }
}

export default Personal;
