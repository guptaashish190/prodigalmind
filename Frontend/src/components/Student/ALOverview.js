import React from 'react';

class ALOverview extends React.Component {
  // Assumptions
    recommendations = [
      {
        img: '/images/rec1.png',
        title: 'Electrostatic Potential',
        duration: 20,

      },
      {
        img: '/images/rec2.png',
        title: 'Rotation Mechanics',
        duration: 20,
      },
      {
        img: '/images/rec3.png',
        title: 'Gravitational Energy',
        duration: 20,
      },
    ]

    mapRecomCards = () => this.recommendations.map(recomOBJ => (
      (
        <li>
          <div className="image"><img src={recomOBJ.img} alt="recommendation" /></div>
          <div className="detail">
            <div className="title">{recomOBJ.title}</div>
            <div className="extras">
              <span>{recomOBJ.duration} mins</span>
              {/* <span><img src="/images/like.png" alt="like" /></span> */}
            </div>
          </div>
        </li>
      )
    ))

    render() {
      return (
        <div className="aloverview-container">
          <div className="title">
                Adaptive Learning Overview
          </div>
          <ul className="video-list">
            {this.mapRecomCards()}
            <li className="view-all">
                View All
            </li>
          </ul>
        </div>
      );
    }
}

export default ALOverview;
