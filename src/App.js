import React from 'react'
import { Provider } from 'react-redux';
import store from './state/redux/store';
import 'antd/dist/antd.css';
import Home from './views/Home'

function App() {
  return (
    <Provider store={store}>
        <Home />
    </Provider>
  );
}

export default App;
