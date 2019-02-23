import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="cpanel">
          <img src="/images/Group 33.svg" alt="home" />
          <img src="/images/man-user.svg" alt="user" />
          <img src="/images/ic_timeline_24px.svg" alt="timeline" />
        </div>
      </div>
    );
  }
}

export default Sidebar;
