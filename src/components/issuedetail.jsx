import React, { Component } from "react";
import IssueList from "./issuelist";


class IssueDetail extends Component {  
  state = {
    issue_number: null
  };
  componentDidMount() {
    const { issue_number } = this.props.match.params;
    fetch(
      `https://api.github.com/repos/facebook/create-react-app/issue/${issue_number}`
    ).then(issue_number => {
      this.setState(() => ({ issue_number }));
    });
  }
  render() {
    return (
      <div>
        <p>jfeklbvjebvjke</p>
      </div>
    );
  }
}

export default IssueDetail;
