import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import ClassOverview from './Teacher/ClassOverview';
import ClassAnalysis from './Teacher/ClassAnalysis';
import Student from './Student';
import Header from './Header';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div className="body-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/teacher" component={ClassOverview} />
            <Route exact path="/teacher/class" component={ClassAnalysis} />
            <Route exact path="/student" component={Student} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
