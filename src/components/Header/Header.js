import React, { Component } from 'react';

class Header extends Component{
    constructor(props){ 
        super(props)
    } // end constructor
    render(){
        return(
            <header>
                <h1>My Cleaning List</h1>
            </header>
        ); // end return
    } // end render
} // end extends

export default Header;