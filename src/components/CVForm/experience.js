import { Component } from "react";
import ExperienceItem from "./experienceItem";
import { uniqueId } from "lodash";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.addItem = this.addItem.bind(this);
  }

  renderDivs() {
    const { updateState } = this.props;
    let { count } = this.state;
    let divs = [];
    while (count--) {
      divs.push(<ExperienceItem key={count}></ExperienceItem>);
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
      <div>
        <h2>Experience</h2>
        <ExperienceItem updateState={updateState}></ExperienceItem>
        {this.renderDivs()}
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

export default Experience;
