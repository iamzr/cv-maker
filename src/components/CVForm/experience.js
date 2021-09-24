import { Component } from "react";
import ExperienceItem from "./experienceItem";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
    this.addItem = this.addItem.bind(this);
  }

  renderDivs() {
    const { updateState } = this.props;
    let { count } = this.state;
    let divs = [];
    for (let i = 0; i < count; i++) {
      divs.push(
        <ExperienceItem
          updateState={updateState}
          key={count}
          no={count}
        ></ExperienceItem>
      );
    }
    return divs;
  }

  addItem(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { updateState } = this.props;
    return (
      <div id="experience">
        <h2>Experience</h2>
        {this.renderDivs()}
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

export default Experience;
