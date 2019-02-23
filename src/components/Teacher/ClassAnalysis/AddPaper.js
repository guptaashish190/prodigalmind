import React from 'react';
import Axios from 'axios';
import shortid from 'shortid';
import { server } from '../../../../config';

class AddPaper extends React.Component {
    state = {
      numberques: 2,
      page: 'basic',
      questions: ['Gravitation', 'Gravitation'],
      class: 7,
      subject: 'Physics',
      studMarks: {},
      maxMarks: 10,
    }


    studentNames = ['Ashish', 'Lavan', 'Arpit']

    setFieldState = (stud, i, e) => {
      const { studMarks } = this.state;
      if (!studMarks[stud]) {
        studMarks[stud] = [];
      }
      studMarks[stud][i] = e.target.value;
      this.setState({ studMarks });
    }
    getFields = (student) => {
      let fields = [];
      for (let i = 0; i < this.state.numberques; i += 1) {
        fields.push(<input placeholder={`Q${i + 1}`} type="text" value={this.state.studMarks[student] ? this.state.studMarks[student][i] : ''} onChange={e => this.setFieldState(student, i, e)} />);
      }
      return fields;
    }

    mapStudentsFields = () => {
      let list = [];
      return this.studentNames.map(stud => (
        <li>
          <div className="name">{stud}</div>
          <div className="fields">
            {this.getFields(stud)}
          </div>
        </li>

      ));
    }

    onSubmit = () => {
      const studentMarks = Object.keys(this.state.studMarks).map(id => ({ roll: shortid.generate(), marks: this.state.studMarks[id] }));
      const marksList = [];
      for (let i = 0; i < this.state.numberques; i += 1) {
        marksList.push(this.state.maxMarks);
      }
      const data = {
        paper_subject: this.state.subject,
        paper_topics: this.state.questions,
        paper_marks: marksList,
        q_num: this.state.numberques,
        student: studentMarks,
      };
      console.log(data);
      Axios.post(`${server}/uploadPaper`, data).then((res) => {
        console.log(res);
      });
    }
    setStateQuestions = (e, i) => {
      const { questions } = this.state;
      questions[i] = e.target.value;
      this.setState({
        questions,
      });
    }
    getQuestionMaps = () => {
      let list = [];
      for (let i = 0; i < this.state.numberques; i += 1) {
        list.push(<li className="questions-card">
          {i + 1}
          <select defaultValue={this.state.questions[i]} onChange={e => this.setStateQuestions(e, i)}>
            <option > Gravitation</option>
            <option> NLG</option>
            <option> Electrostats</option>
          </select>
                  </li>);
      }
      return list;
    }
    setMarksPage = () => (
      <div className="setmarks-container">
        <button onClick={() => this.props.close()} className="close">X</button>
        <div className="leftimage">
          <img src="/images/information.png" alt="Add Question paper" />
        </div>
        <div className="main">
          <div className="title">Add Question Paper Data</div>
          <div className="content">
            <ul>
              {this.mapStudentsFields()}
            </ul>
          </div>
          <button className="submit-marks" onClick={() => this.onSubmit()}>Submit Marks</button>

        </div>

      </div>
    )

    subjects = ['Physics', 'Chemistry', 'Biology'];

    initQuestions = (e) => {
      let questions = [];
      for (let i = 0; i < e.target.value; i += 1) {
        questions.push('Gravitation');
      }
      this.setState({ numberques: e.target.value, questions });
      console.log(questions);
    }

    basicDetailsPage = () => (
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
                    <select value={this.state.class} onChange={e => this.setState({ class: e.target.value })}>
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
                    <select onChange={e => this.setState({ subject: e.target.value })}>
                      {this.subjects.map(sub => <option value={sub} >{sub}</option>)}
                    </select>
                  </span>
                </li>
                <li>
                  <span className="number">No. of Ques</span>
                  <span className="dropdown"><input value={this.state.numberques} onChange={e => this.initQuestions(e)} type="number" /></span>
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
              <button className="submit-marks" onClick={() => this.setState({ page: 'setMarks' })}>Submit Marks</button>
            </div>
          </div>
        </div>
      </div>
    )

    render() {
      return (
        <div className="addpaper">]
          {this.state.page === 'basic' ? this.basicDetailsPage() : this.setMarksPage()}
        </div>
      );
    }
}

export default AddPaper;
