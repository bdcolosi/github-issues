import React, {Component} from 'react';


class IssueDetail extends Component {
    state = {
        number: null
    }
    componentDidMount() {
        const {issue_number} = this.props.match.params
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`)
        .then((number) => {
            this.setState(() => ({issue_number}))
        })
    }
    render() {
      return (
        <div>
    <p>{issue.title}{issue_number}{issue.body}</p>
        </div>
      )
    }
  }

  export default IssueDetail;

