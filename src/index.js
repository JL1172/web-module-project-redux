import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';



import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { rootReducer } from './reducers';



const store = createStore( rootReducer  ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <Provider store = {store}>    
  <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
