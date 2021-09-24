import { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  renderParts() {
    const { updateState, items } = this.props;
    let divs = [];
    items.push(
      divs.map((item) => {
        return (
          <div>
            <label htmlFor={item.name}>{item.label}</label>
            <input name={item.name} type={item.type}></input>
          </div>
        );
      })
    );
  }

  render() {
    return <div className="form-section">{this.renderParts}</div>;
  }
}

export default Section;
