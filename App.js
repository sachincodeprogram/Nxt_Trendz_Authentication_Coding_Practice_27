import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="body-section">
          <Switch>
            <Route exact path="/" Component={Home} />
            <Route exact path="/login" Component={LoginForm} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
