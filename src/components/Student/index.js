import React from 'react';
import ALOverview from './ALOverview';
import Sidebar from './Sidebar';

class Student extends React.Component {
  // Assumptions
  name = 'Sam Wilson'

  render() {
    return (
      <div className="student-section-container">
        <Sidebar />
        <div className="main">
          <div className="greeting">
              Good Afternoon, {this.name.split(' ')[0]}
          </div>
          <ALOverview />
        </div>
      </div>
    );
  }
}

export default Student;
