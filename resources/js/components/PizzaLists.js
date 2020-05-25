import React, { Component } from 'react'
//import image from '../'
class PizzaItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      qty:0,
      total:0
    }
  }
    render(){
      return(
        <div className="col-md-4">
        <div className="card">
                <div className="card-header">My Cart</div>
                <div className="card-body">
                <button className="btn btn-sm btn-success">
                    <i className="material-icons"
                    total={this.state.qty}>shopping_cart</i>
                    {this.state.qty}
                </button><br></br> <br></br>
                Total: $ {this.state.total}
                </div>
        </div>
  </div>
      )
    }
}
class PizzaLists extends Component{
    constructor(props){
        super(props)
        this.state = {
            pizzas : [],
            qty:0,
            total:0,
            currentItem:null,
        }
        this.listPizzas = this.listPizzas.bind(this)
        this.addToCart =  this.addToCart.bind(this)
        this.increaseCounter = this.increaseCounter.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
    }

    componentDidMount()
    {
      this.listPizzas();
    }
    listPizzas(){
      fetch('http://localhost:8000/api/v1/pizzas/list')
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
        this.setState({qty:this.state.qty + 1})
        //console.log(this.state.qty)
        this.props.handleTotal(this.props.price)
    }
    increaseCounter()
    {
      const _counter = this.state.counter += 1
      console.log(_counter)
      //this.setState({counter:_counter})
    }
    handleClick(item){
      this.setState({currentItem:item})
    }
    calculateTotal(price){
      this.setState({total:this.state.total + price})
      console.log(this.state.total);
    }
    render(){
        const { pizzas } = this.state
        return (
            <div className='container-fluid py-4'>
              <div className='row justify-content-center'>
                <div className='col-md-8'>
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
                            {pizzas.map(
                                    item =>
                                        <tr id={item.id} key={item.id}>
                                            <td>{item.id}</td>
                                            <td><img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pizza"></img></td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>$ {item.price}</td>
                                            <button onClick={this.addToCart}  className="btn btn-sm btn-success"> <i className="material-icons">add_shopping_cart</i></button>
                                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    </div>
                  </div>
                </div>
                <PizzaItem selectedPizza={this.state.currentItem}>
                </PizzaItem>
              </div>
            </div>
          )
    }
}
export default PizzaLists
