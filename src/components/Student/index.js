import React from 'react';
import ALOverview from './ALOverview';
import Sidebar from './Sidebar';
import AQuizes from './AQuizes';
import Timeline from './Timeline';
import Chatroom from './Chatroom';

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
          <div className="features-container">
            <ALOverview />
            <AQuizes />
            <Chatroom />
            <Timeline />
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
