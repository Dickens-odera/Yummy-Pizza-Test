import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class PizzaLists extends Component{
    constructor(props){
        super(props)
        this.state = {
            pizzas : [],
            counter:0,
        }
        this.listPizzas = this.listPizzas.bind(this)
        this.addToCart =  this.addToCart.bind(this)
        this.increaseCounter = this.increaseCounter.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount()
    {
      this.listPizzas();
    }
    listPizzas(){
      fetch('http://localhost:8000/api/v1/pizzas')
        .then(response => {
            return response.json();
        })
        .then(items => {
            this.setState({ pizzas:items.data });
        });
    }
    renderPizzas() {
      return this.state.pizzas.map(pizza => {
          return (
              //this.handleClick() method is invoked onClick.
              <li onClick={
                  () =>this.handleClick(pizza)} key={pizza.id} >
                  { pizza.title } 
              </li>      
          );
      })
    }
     addToCart(){
      //this.setState({counter:this. increaseCounter})
      //console.log(this.props.title)
      this.increaseCounter()
    }
    increaseCounter()
    {
      const _counter = this.state.counter += 1
      console.log(_counter)
      //this.setState({counter:_counter})
    }
    handleClick(){
      
    }
    render(){
        const { pizzas } = this.state
        return (
            <div className='container-fluid py-4'>
              <div className='row justify-content-center'>
                <div className='col-md-12'>
                  <div className='card primary'>
                    <div className='card-header text-center text-uppercase'>Pizza Menu</div>
                    <div className='card-body'>
                      <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Avartar</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Add to Cart</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.pizzas.map(
                                    item =>
                                        <tr id={item.id} key={item.id}>
                                            <td>{item.id}</td>
                                            <td><img src={item.avartar}></img></td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td><button className="btn btn-success btn-sm" onClick={this.addToCart}> <i className="material-icons">add_shopping_cart</i></button></td>
                                        </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
    }
}

export default PizzaLists