import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Order extends Component{
    constructor(props){
        super(props);
        this.state = {
            newOrder:{
                name:'',
                email:'',
                address:'',
                location:'',
                phone:'',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount(){

    }
    onChange(){
        this.setState({[newOrder.name.target]:this.target.value})
    }
    handleSubmit(event){
        event.preventDefault()
    }

render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-md-5">
                    <div className="card">
                        <div className="card-header text-center text-uppercase">Checkout Page</div>
                        <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group row">
                        <label className="form-label col-md-4 text-md-right">Name</label>
                        <div className="col-md-8">
                            <input className="form-control" name="name"></input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="form-label col-md-4 text-md-right">Email</label>
                        <div className="col-md-8">
                            <input className="form-control" name="email" type="email"></input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="form-label col-md-4 text-md-right">Address</label>
                        <div className="col-md-8">
                            <input className="form-control" name="address"></input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="form-label col-md-4 text-md-right">Location</label>
                        <div className="col-md-8">
                            <input className="form-control" name="location"></input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="form-label col-md-4 text-md-right">Phone</label>
                        <div className="col-md-8">
                            <input className="form-control" name="phone"></input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <Link className="btn btn-sm btn-primary mr-auto" to="/"><i className=""></i>Continue Shopping</Link>
                        <button type="submit" className="btn btn-sm btn-primary ml-auto">Place Order</button>
                        </div>
                </form>
                </div>
                    </div>
            </div>
            </div>
        </div>
    )
}
}
export default Order