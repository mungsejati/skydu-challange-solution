import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WordSearch from "./scenes/word-search/WordSearch";
import CustomCardName from "./scenes/custom-card-name";
import FinancialStatement from "./scenes/financial-statement/FinancialStatement";

export default function WebRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FinancialStatement}/>
        <Route path="/word-search" component={WordSearch}/>
        <Router>
          <CustomCardName />
        </Router>
      </Switch>
    </Router>
  )
}