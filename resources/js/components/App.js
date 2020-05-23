import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Header from '../components/Header';
class  App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        M.AutoInit();
    }
    render()
    {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                <Header></Header>

                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
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
