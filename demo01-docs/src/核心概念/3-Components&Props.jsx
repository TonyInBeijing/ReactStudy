/**
 * @description 组件&props
 * @author YHW 2021-07-08
 */

// TODO：函数组件与class组件

import React from 'react';
import ReactDOM from 'react-dom';
// 函数组件
function WelcomeFunc(props) {
    return <h1>Hello, {props.name}</h1>;
}
// class组件
class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello,{this.props.name}</h1>;
    }
}

// TODO：渲染组件
// props: 当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”
const element = <WelcomeFunc name="Tony" />; // 会显示 Hello,Tony
ReactDOM.render(element, document.getElementById("root"));

// 1. 调用ReactDOM.render()函数，并传入 <Welcome name="Tony"/>作为参数
// 2. React调用Welcome组件，并将{name: "Tony"}作为props传入
// 3. Welcome组件将<h1>Hello,Tony</h1>元素作为返回值
// 4. React DOM 将 DOM 高效地更新为 <h1>Hello,Sara</h1>

// TODO : 组件名称必须以大写字母开头。 小写字母开头视为原生DOM标签
