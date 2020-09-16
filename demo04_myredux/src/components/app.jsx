import React, { Component } from 'react'
import { store, actionCreator } from '../redux/store';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBalance: 0,
        }
    }
    componentDidMount() {
        this.setState({ currentBalance: store.getState().balance }, () => {
            store.subscribe(() => {
                this.setState({ currentBalance: store.getState().balance });
            })
        })
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={() => {
                        store.dispatch(actionCreator('ADD', 2));
                    }}>
                        add 2 balance
            </button>
                    <button onClick={() => {
                        store.dispatch(actionCreator('MINUS', 1));
                    }}>
                        minus 1 balance
            </button>
                </div>
                <span>{this.state.currentBalance}</span>
            </div>
        );
    }
};
