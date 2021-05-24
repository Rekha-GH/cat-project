import { BrowserRouter as Router } from 'react-router-dom';

import {
  Header,
  SwitchRouter
} from './common/components';
import { Provider } from 'react-redux';

import store from './Store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <Header />
          </nav>
          <SwitchRouter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
