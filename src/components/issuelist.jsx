import React, {Component} from 'react';


class IssueList extends Component {
    state = {
        issues: [],
        isLoaded: false
    }
  
async componentDidMount() {
    try {
        const response = await('https://api.github.com/repos/facebook/create-react-app/issues')
        const data = await response.json();
        console.log(data)
       this.setState({
           issues: data,
           isLoaded: true
       })
    } catch (error) {
        this.setState({
            issues: error.message
        })
    }
} render() {
    var { isLoaded, issues } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="IssueList">
          <ul>
            {issues.map(issue => (
              <li key={issue.url}>
                Title: {issue.title} | Url: {issue.url} | Body:
                {issue.body}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <div className="IssueList"></div>;
  }
}
export default IssueList;
