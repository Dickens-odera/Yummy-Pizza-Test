import React, { Component } from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import { cold , setConfig} from 'react-hot-loader';
import axios from 'axios'
class Order extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            address:'',
            location:'',
            phone:''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount(){

    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(event){
            event.preventDefault();
            const data ={
                name:this.state.name,
                email:this.state.email,
                address:this.state.address,
                location:this.state.address,
                phone:this.state.phone
            }
            fetch('api/v1/orders/add',{
              method:'post',
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
              .then(res =>{
                  //res.json()
                  if (res.status === 500) {
                    return res.json() // return the result of the inner promise, which is an error
                    .then((json) => {
                      const { message, stackTrace } = json;
                      throw new ServerException(message, stackTrace);
                    });
                  } else {
                    return res.json();
                  }
              })
              .then(items =>{
                  this.setState({
                    name:'',
                    email:'',
                    address:'',
                    location:'',
                    phone:''
                  })
                  alert('Order sent successfully')
              })
              .catch(err =>{
                  console.log(err.response)
              })
          }
render(){
    // const { register, handleSubmit, watch, errors } = useForm();
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
                            <input className="form-control" name="name"
                            value={this.state.name}
                            onChange={this.onChange.bind(this)}
                            // ref={register({ required: true })}
                            >
                            </input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="form-label col-md-4 text-md-right">Email</label>
                        <div className="col-md-8">
                            <input className="form-control" name="email" type="email"
                            value={this.state.email}
                            onChange={this.onChange.bind(this)}
                            // ref={register({ required: true })}
                             ></input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="form-label col-md-4 text-md-right">Address</label>
                        <div className="col-md-8">
                            <input className="form-control" name="address"
                            value={this.state.address}
                            onChange={this.onChange.bind(this)}
                            // ref={register({ required: true })} 
                            ></input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="form-label col-md-4 text-md-right">Location</label>
                        <div className="col-md-8">
                            <input className="form-control" name="location"
                            value={this.state.location}
                            onChange={this.onChange.bind(this)}
                            // ref={register({ required: true })} 
                            ></input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="form-label col-md-4 text-md-right">Phone</label>
                        <div className="col-md-8">
                            <input className="form-control" name="phone"
                            value={this.state.phone}
                            onChange={this.onChange.bind(this)}
                            // ref={register({ required: true })} 
                            ></input>
                        </div>
                        </div>
                        <div className="form-group row">
                        <Link className="btn btn-sm btn-primary mr-auto" to="/"><i className=""></i>Continue Shopping</Link>
                        <button type="submit" className="btn btn-sm btn-primary">Place Order</button>
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