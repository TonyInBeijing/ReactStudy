/**
 * @description JSX简介
 * @author YHW 2021-07-07
 */


import React from "react";
const name = "Tony";
//  React DOM 使用 camelCase（小驼峰命名）来定义属性的名称
const element = <div className="hello" tabIndex="0">Hello,{name}</div>;

// ReactDOM 在渲染所有输入内容之前，默认会进行转义。
// 它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。
// 这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。
const title = "><script>alert('xss')</script>";
const element2 = <div>{title}</div>; // 会被转译

// JSX表示对象
// Babel会把JSX转译成一个名为 React.createElement() 函数调用

const element3 = (
    <div className="hello">
        Hello World!
    </div>
);

const element4 = React.createElement(
    "div",
    { className: "hello" },
    "Hello,World!"
);

// React.createElement 大致创建了下面一个对象（简化版）
const element5 = {
    type: "div",
    props: {
        className: "hello",
        chidren: "Hello World!"
    }
}



export default element4;