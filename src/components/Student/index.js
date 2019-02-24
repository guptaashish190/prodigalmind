import React from 'react';
import Axios from 'axios';
import ALOverview from './ALOverview';
import Sidebar from './Sidebar';
import AQuizes from './AQuizes';
import Timeline from './Timeline';
import Chatroom from './Chatroom';
import config from '../../../config';

class Student extends React.Component {
  componentWillMount() {

  }


  getRandomSub = () => {
    const subjects = ['Physics', 'History', 'Geography'];
    return subjects[Math.floor(Math.random() * subjects.length)];
  }
  // Assumptions
  name = 'Sam Wilson'


  do = () => {
    const list = {
      Physics: ['NLM', 'Electric Charges', 'Gravity', 'SHM', 'Nuk', 'Physic', 'Elcros', 'kaksda', 'asibs', 'aosa'],
      History: ['Ancient civilisations', 'Roman empire', 'Modern history', 'SHM', 'Nuk', 'Physic', 'Elcros', 'kaksda', 'asibs', 'aosa'],
      Geography: ['Planet earth', 'India', 'Agriculture', 'SHM', 'Nuk', 'Physic', 'Elcros', 'kaksda', 'asibs', 'aosa'],
    };

    const payload = {};
    const subject = this.getRandomSub();
    payload.paper_subject = subject;
    payload.paper_topics = list[subject];
    payload.q_num = 10;
    payload.paper_marks = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    const students = [];
    for (let i = 0; i < 50; i += 1) {
      students.push({
        roll: i,
        marks: [
          Math.floor(Math.random() * payload.paper_marks[0]),
          Math.floor(Math.random() * payload.paper_marks[1]),
          Math.floor(Math.random() * payload.paper_marks[2]),
          Math.floor(Math.random() * payload.paper_marks[3]),
          Math.floor(Math.random() * payload.paper_marks[4]),
          Math.floor(Math.random() * payload.paper_marks[5]),
          Math.floor(Math.random() * payload.paper_marks[6]),
          Math.floor(Math.random() * payload.paper_marks[7]),
          Math.floor(Math.random() * payload.paper_marks[8]),
          Math.floor(Math.random() * payload.paper_marks[9]),
        ],
      });
    }
    payload.student = students;
    console.log(payload);
    Axios.post('http://192.168.43.158:8000/uploadPaper', payload).then((res) => {
      console.log(res.data);
    });
  }

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
