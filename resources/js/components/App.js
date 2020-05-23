import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Header from '../components/Header';
import axios from 'axios';
class  App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:'',
            price:'',
            avartar:'',
            pizzas:[]
        }

        this.listPizzas = this.listPizzas.bind(this);
    }
    componentDidMount(){
        this.listPizzas();
    }

    async listPizzas(){
        if (! this.state.pizzas) {
        const uri = 'http://localhost:8000/api/v1/pizzas';
        const pizzas = {
            title:this.state.title,
            description:this.state.description,
            price:this.state.price,
            avartar:this.state.avartar
        }
        try{
            const  response = await axios.get(uri,pizzas,{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            const items = response.json();
            this.setState({pizzas:items.data})
        }
        catch(err){
            console.log(err)
        }
    }
}
    render()
    {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Available Pizzas at our stores today</div>
        
                        <div className="card-body">
                        <div>
                        {this.state.pizzas && 
                            <table className="table-responsive table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Avartar</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                            {this.state.pizzas.map(
                                    item =>
                                        <tr id={item.id} key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.avartar}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="btn btn-sm btn-success">Add To Cart</button>
                                            </td>
                                        </tr>
                            )}
                        
                            </tbody>
                        
                            </table>
                            }
                            </div>
                        </div>
                            
                    </div>
                            
                </div>
            </div>
        </div>
    );
}
}
export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
