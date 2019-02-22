import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Teacher from './Teacher';
import Student from './Student';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/teacher" component={Teacher} />
            <Route exact path="/student" component={Student} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
