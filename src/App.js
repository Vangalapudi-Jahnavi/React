import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wish from './wish';
import Greeting from './components/Greetings';
import Welcome from './components/Welcome';
import State from './components/state';
import ClassState from './components/classState';
import Hooks from './components/Hooks';
import data from './data/data.json';
function App() {
  return (
    <div className="App">
      {/* <button class="btn btn-primary">Hello</button> */}
      {/* <h1>Using hooks</h1>
      <Hooks />
    <Home />
    <Hello />

    <Wish />
    <Greeting name='jahnavi'></Greeting>
    <h1>This is my class</h1>
    <Welcome name='jahnavi'></Welcome>
    <State />
    <ClassState /> */}
    {/* </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    <Home />
    </div>
  );
}

// let Home=()=>{
//   return(<h1>This is class</h1>);
// }
let Home=()=>{
  let profile=data.profiles;
  console.log(profile);
  return(
    <div className="row justify-content-center">
      {profile.map((value,jahnavi)=>(
        <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={jahnavi}>
          <div className="card">
            <div className="card-body">
              <h1>
                {value.basic.name}<br />
                </h1>
<p>                {value.basic.role}<br />
                {value.basic.phone}</p>
              <h2 className="btn btn-primary">Profiles</h2>
            </div>
          </div>
        </div>
      ))
}
    </div>
  )
}
export default App;