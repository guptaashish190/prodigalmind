import React from 'react';

class Chatroom extends React.Component {
  render() {
    return (
      <div className="chatroom-container">
        <div className="title">
            Chatroom
        </div>
        <div className="main">
          <img src="/images/group.png" alt="chatroom" />
          <button>Enter Chatroom</button>
          <span>
            Give Notifications, messages to students or chat with them.
          </span>
        </div>
      </div>
    );
  }
}

export default Chatroom;
