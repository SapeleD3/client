import React from 'react';
import './App.css';
import { Register } from './components/Register';
import { Dashboard } from './components/Dashboard';


const initialState = {
  route: 'reg',
  isRegistered: false,
  name: ''
}
class App extends React.Component {
  constructor() {
    super ();
    this.state = initialState;
  }

  onRouteChange = (router) => {
    if (router === 'reg') {
      this.setState({initialState})
    } else if (router === 'registered') {
      this.setState({isRegistered: true})
    }
    this.setState({route:router})
  }

  loadUser = (data) => {
    this.setState({name: data.name})
  }

  render() {
    return (
      <div className="App">
        {
          this.state.route === 'reg' ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : <Dashboard name={this.state.name}/>
        }
        
      </div>
    );
  }
}

export default App;
