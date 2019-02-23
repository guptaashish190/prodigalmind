import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

import './styles/styles.scss';
import './styles/ClassAnalysis.scss';
import './styles/ClassOverview.scss';
import './styles/Student.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
