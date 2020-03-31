import React, { Component } from "react";
import {
  Card,
  CardContent,
  MediaContent,
  Title,
  Subtitle,
  Media,
  Section,
  Container,
  Box
} from "bloomer";
import "bulma/css/bulma.css";


class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    console.log("component did mount");
    try {
      const response = await fetch(
        "https://api.github.com/repos/facebook/create-react-app/issues"
      );
      const data = await response.json();
      console.log(data);
      this.setState({
        issues: data,
        isLoaded: true
      });
    } catch (error) {
      this.setState({
        issues: error.message
      });
    }
  }
  render() {
    const { isLoaded, issues } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Card className="IssueList">
          <CardContent>
            <Media>
              <MediaContent>
                {issues.map(issue => (
                  <Box key={issue.url}>
                    <Title isSize={4}>{issue.title} </Title>
                    <Subtitle isSize={6}>
                      {issue.url}
                      <br />
                      <br />
                      {issue.body}
                    </Subtitle>
                  </Box>
                ))}
              </MediaContent>
            </Media>
          </CardContent>
        </Card>
      );
    }
  }
}
export default IssueList;
