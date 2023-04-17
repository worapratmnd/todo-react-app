import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './containers/Todo';
import { Provider } from 'react-redux';
import { store } from './reducers';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  )
}

export default App;
