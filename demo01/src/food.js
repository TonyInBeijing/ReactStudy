import React, { Component, Fragment } from 'react';
class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            list: []
        }
        this.inputOnChange = this.inputOnChange.bind(this);
    }
    inputOnChange(e) {
        console.log(e);
        this.setState({
            foodName: e.target.value
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.foodName}
                        onChange={this.inputOnChange}
                    />
                    <button>点菜</button>
                </div>
                <ul>
                    <li>宫爆鸡丁</li>
                    <li>鱼香肉丝</li>
                </ul>
            </Fragment>
        );
    }
}
export default Food;