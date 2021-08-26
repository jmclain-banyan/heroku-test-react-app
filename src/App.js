import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { proxy, requestBodyHeader } from './config';

function App() {
  const test = () => {
    let response = '';
    axios.get(`${proxy}/api`).then(res => {
      console.log(res)
      response = 'success'
    })
    .catch(err => {
      console.log(err)
      response = 'fail'
    })
    return response
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Universe!
        </p>
          <button onClick={test}>click</button>
      </header>
    </div>
  );
}

export default App;
