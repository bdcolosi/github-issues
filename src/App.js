import React from "react";
import "./App.css";
import IssueList from "./components/issuelist";
import { Box, Columns, Column } from "bloomer";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Box>
            <Columns>
              <Column><IssueList /></Column>
            </Columns>
          </Box>
        </div>
      </header>
    </div>
  );
}

export default App;
