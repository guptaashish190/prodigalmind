import React from 'react';

class AddPaper extends React.Component {
    state = {
      numberques: 2,
    }

    getQuestionMaps = () => {
      let list = [];
      for (let i = 0; i < this.state.numberques; i += 1) {
        list.push(<li className="questions-card">
          {i + 1}
          <select>
            <option> Gravitation</option>
          </select>
        </li>);
      }
      return list;
    }

    render() {
      return (
        <div className="addpaper">
          <div className="addpaper-container">
            <button onClick={() => this.props.close()} className="close">X</button>
            <div className="leftimage">
              <img src="/images/information.png" alt="Add Question paper" />
            </div>
            <div className="main">
              <div className="title">Add Question Paper Data</div>
              <div className="content">
                <div className="basic-details">
                  <ul>
                    <li>
                      <span className="label">Class</span>
                      <span className="dropdown">
                        <select>
                          <option value="7" >7</option>
                          <option value="8" >8</option>
                          <option value="9" >9</option>
                          <option value="10" >10</option>
                          <option value="11" >11</option>
                          <option value="12" >12</option>
                        </select>
                      </span>
                    </li>
                    <li>
                      <span className="Subject">Subject</span>
                      <span className="dropdown">
                        <select>
                          <option value="physics">Physics</option>
                          <option value="chemistry">Chemistry</option>
                          <option value="biology">Biology</option>
                        </select>
                      </span>
                    </li>
                    <li>
                      <span className="number">No. of Ques</span>
                      <span className="dropdown"><input value={this.state.numberques} onChange={e => this.setState({ numberques: e.target.value })} type="number" /></span>
                    </li>

                  </ul>
                </div>
                <div className="upload-box">
                  <span>Upload</span>
                </div>
                <div className="questions-cards">
                  <ul>
                    {this.getQuestionMaps()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default AddPaper;
