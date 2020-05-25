import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PizzaLists from './PizzaLists'
import Order from './Order'
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      text:''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({text:'Hello'})
    alert(this.state.text)
  }
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header handleClick={this.handleClick}/>
          <Switch>
                <Route exact path='/' component={PizzaLists} />
                <Route exact path='/checkout' component={Order}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))