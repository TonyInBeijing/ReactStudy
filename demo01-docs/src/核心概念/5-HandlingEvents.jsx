/**
 * @description 事件处理
 * @author YHW 2021-07-08
 */

// TODO: React 元素的事件处理和 DOM 元素很相似，但是有一点语法上的不同
// 1.React 事件的命名采用小驼峰式(camelCase),而不是纯小写
// 2.使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串

import React from 'react';

function Form() {
    function handleSubmit(e) {
        //TODO: 在React中必须显式使用preventDefault来阻止默认行为
        e.preventDefault();
        console.log("Submit!");
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        // TODO: 为了在回调中使用 `this`,这个绑定是必不可少的
        // 在 JavaScript 中，class 的方法默认不会绑定 this
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick() {
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
    // 使用箭头函数
    handleClick = () => {
        console.log(this);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                {/* 或者在JSX中使用箭头函数 */}
                {/* <button onClick={() => this.handleClick()}></button> */}
                {/* 此语法问题在于每次渲染上面 button 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。 */}
            </div>
        );
    }
}
export default Toggle;

// TODO: 向事件处理程序传递参数

class FormClass extends React.Component {
    constructor(props) {
        super(props);

    }
    deleteRow(id) {
        console.log(id);
    }
    // 在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
    render() {
        return (
            <div>
                {
                    [1, 2, 3].map(item => (
                        <div>
                            {/* 箭头函数 */}
                            <button onClick={e => this.deleteRow(item, e)}></button>
                            {/* Function.prototype.bind */}
                            <button onClick={this.deleteRow.bind(this, item)}></button>
                        </div>
                    ))
                }
            </div>
        );
    }
}