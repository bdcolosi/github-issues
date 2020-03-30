import React, {Component} from 'react';


class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues:[],
            isLoaded: false   
        }
    }

    async componentDidMount() {
        console.log("component did mount");
        try {
            const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues')
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
    } 
    render() {
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
    }
    
}
export default IssueList;

