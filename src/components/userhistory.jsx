import React, { Component } from 'react';

export default class UserHistory extends Component {
    constructor(props) {
        console.log('hello?')
        super(props)
        this.thing = "history!!";
    }
    render() {
        return (
            <div className='user-history'>
                <h1>hello from user history</h1>
                <h3>{this.thing}</h3>
            </div>
        )
    }
}