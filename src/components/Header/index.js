import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img src="/images/pencil.svg" alt="logo" />
          <h2>Prodigal<span>Mind</span></h2>
        </div>
        <div className="search-bar">
          <img src="/images/magnifying-glass.svg" alt="search" />
          <input placeholder="Search" />
        </div>
        <div className="control-panel">
          <div className="account-details">
            <img src="/images/student.svg" alt="student" />
            <span>Sam Wilson</span>
            <img src="/images/ic_expand_more_24px.svg" alt="arrow" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
