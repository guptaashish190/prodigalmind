import React from 'react';

class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline-container">
        <div className="title">
            Timeline
        </div>
        <div className="main">
          <ul>
            <li>
              <div className="name">
                    Electrostats quiz
              </div>
              <div className="detail">
                    10 Questions
              </div>
            </li>
            <li>
              <div className="name">
                    Electrostatic Potential Test
              </div>
              <div className="detail">
                    14 Questions 100 Marks
              </div>
            </li>
            <li>
              <div className="name">
                    Assignment Gravitation
              </div>
              <div className="detail">
                    4 Members Team
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Timeline;
