import React, { Component } from 'react'
//import image from '../'

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
        this.handleAddToCart = this.handleAddToCart.bind(this)
        this.viewCart = this.viewCart.bind(this)
    }

    componentDidMount()
    {
      this.listPizzas();
    }
    listPizzas(){
      fetch('api/v1/pizzas/list')
        .then(response => {
            return response.json();
        })
        .then(items => {
            this.setState({ pizzas:items.data });
            this.state.pizzas.push(items)
        });
    }

     addToCart(item){
        this.setState({qty:this.state.qty += 1, total:this.state.total + 10})
        console.log(this.state.qty)
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
      //console.log(this.state.total);
    }
    handleAddToCart(e){
      this.addToCart(this.item);
    }
    viewCart(items){

    }
    render(){
        const { pizzas } = this.state
        const { imgStyle } = {
          width:'20px',
          height:'40px',
        }
        return (
            <div className='container-fluid py-4'>
              <div className='row justify-content-center'>
                <div className='col-md-8'>
                  <div className='card primary'>
                    <div className='card-header text-center text-uppercase'>Pizza Menu</div>
                    <div className='card-body'>
                      <div className="table-responsive">
                        <table className="table table table-bordered">
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
                                            <td><img 
                                            src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pizza"
                                            className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
                                            style={imgStyle}>
                                            </img></td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>$ {item.price}</td>
                                            <button onClick={this.handleAddToCart}  
                                                    className="btn btn-sm btn-success"
                                                    price={item.price}> 
                                                    <i className="material-icons">add_shopping_cart</i>
                                                    </button>
                                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <div className="card-header">My Cart</div>
                        <div className="card-body">
                        <button className="btn btn-sm btn-success"
                            onClick={this.viewCart}>
                            <i className="material-icons"
                            total={this.state.qty}>shopping_cart</i>
                            {this.state.qty}
                            
                        </button>
                        <br></br> <br></br>
                        Total: $ {this.state.total}
                        </div>
                </div>
          </div>
              </div>
            </div>
          )
    }
}
export default PizzaLists