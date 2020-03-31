import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";
import IssueList from "./components/issuelist";
import { Box, Columns, Column } from "bloomer";
import "bulma/css/bulma.css";
import IssueDetail from './issuedetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
<Route path='/' exact component={IssueList}/>
          <Route path='/issue/:issue_number?' component={IssueDetail}/>
          
        </div>
      </header>
    </div>
  );
}

export default App;



