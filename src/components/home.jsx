import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        console.log('hello?')
        super(props)
        this.state = {
            messages: ['hello!',
            'yoo!!',
            'oh yeeeah'
            ],
            updated: false
        }
        this.addOne = this.addOne.bind(this);
    }

    addOne() {
        this.setState({
            messages: this.state.messages.concat("one more!")
        })
    }
    render() {
        return (
            <div className='home'>
                <ul>
                    {this.state.messages.map(item => (
                        <li>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                    <li>
                        <span onClick={this.addOne}>Add one more!</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home;