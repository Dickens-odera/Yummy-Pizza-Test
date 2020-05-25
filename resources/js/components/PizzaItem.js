import React , { Component } from 'react'

class PizzaItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qty:0,
            total:0
        }
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }
    handleAddToCart(event){
        this.props.addToCart(this.props.item)
    }
    render(){
        return (
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

export default PizzaItem