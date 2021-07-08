/**
 * @description state和生命周期
 * @author YHW 2021-07-08
 */

import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            timer: null
        }
    }
    componentDidMount() {
        // 在组件已经被渲染到 DOM 中后运行
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        // 组件从DOM中被移除
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


// 正确地使用State
// TODO：1.不要直接修改state，修改state调用setState()
// TODO：2. State的更新可能是异步的，React可能会把多个setState()调用合并成一个调用
// 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
// 解决：
// this.setState((state, props) => {
//     counter: state.counter + props.increament
// });

//TODO: 3.State的更新会被合并
// 当你调用setState()的时候，React会把你提供的对象合并到当前的state。

// TODO: 4.数据是向下流动的
// 不管是父组件和子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是class组件
// 这就是为什么称state为局部或者是封装的原因。除了拥有并设置了它的组件，其他组件都无法访问
// 组件可以选择把它的 state 作为 props 向下传递到它的子组件中

