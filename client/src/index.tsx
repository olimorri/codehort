import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store/configureStore';
import './styles/index.sass';
import App from './containers/App/App';

ReactDOM.render(
  // <Provider store={store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  // </Provider>,
  document.getElementById('root')
);
