import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "components/navbar.component"
import AddIncome from 'components/addIncome';
import balanceSheet from 'components/balanceSheet';
import EditIncome from 'components/editIncome';
import Income from 'components/incomes';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route exact path='/' component={balanceSheet}/>
      <Route exact path='/createincome' component={AddIncome}/>
      <Route exact path='/income' component={Income}/>
      <Route exact path='/editIncome/:id' component={EditIncome}/>
      </div>
    </Router>
  );
}

export default App;
