import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Analysis from './ClassAnalysis/';
import Overview from './ClassOverview/';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Overview} />
          <Route path="/class" component={Analysis} />
        </div>
      </Router>
    );
  }
}

export default App;
