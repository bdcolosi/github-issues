import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./App.css";
import IssueList from "./components/issuelist";
import "bulma/css/bulma.css";
import IssueDetail from './components/issuedetail';

function App() {
  return (
    <div className="App">
        <Router>
<Route path='/' exact component={IssueList}/> 
          <Route path='/issue/:issue_number?' component={IssueDetail}/>
        </Router>
      
    </div>
  );
}

export default App;



