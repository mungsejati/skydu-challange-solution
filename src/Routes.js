import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WordSearch from "./scenes/word-search/WordSearch";
import CustomCardName from "./scenes/custom-card-name";
import FinancialStatement from "./scenes/financial-statement/FinancialStatement";
import ReportDashboard from "./scenes/financial-report/ReportDashboard";
import ReportDetail from "./scenes/financial-report/ReportDetail";

export default function WebRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FinancialStatement}/>
        <Route path="/word-search" component={WordSearch}/>
        <Route exact path="/reports" component={ReportDashboard}/>
        <Route exact path="/reports/:reportId" component={ReportDetail}/>
        <Router>
          <CustomCardName />
        </Router>
      </Switch>
    </Router>
  )
}