import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PizzaLists from './PizzaLists'
import Order from './Order'
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
                <Route exact path='/' component={PizzaLists} />
                <Route exact path='/checkout' component={Order} Checkout/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))