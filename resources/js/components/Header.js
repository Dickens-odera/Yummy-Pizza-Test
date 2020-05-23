import React, { Component } from 'react';
import ReactDom from 'react-dom'

class Header extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <nav>
                        <div class="nav-wrapper">
                        <a href="#" class="brand-logo">Yummy Pizza</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">Login</a></li>
                            <li><a href="collapsible.html">Sign Up</a></li>
                        </ul>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;