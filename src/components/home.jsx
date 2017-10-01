import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        console.log('hello?')
        super(props)
        this.thing = "hey!";
    }
    render() {
        return (
            <div>
                <h1>hello???</h1>
                <h3>{this.thing}</h3>
            </div>
        )
    }
}

export default Home;