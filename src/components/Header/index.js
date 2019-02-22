import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img src="/images/pencil.svg" alt="logo" />
          <h1>Prodigal<span>Mind</span></h1>
        </div>
        <div className="search-bar">
          <img src="/images/magnifying-glass.svg" alt="search" />
          <input placeholder="Search" />
        </div>
        <div className="control-panel">
          <h1>hello</h1>
        </div>
      </div>
    );
  }
}

export default Header;
