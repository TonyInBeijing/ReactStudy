/**
 * @description 无障碍
 * @author YHW 2021-07-11
 */

import React, { Fragment } from 'react';

// TODO: 网络无障碍辅助功能(Accessibility a11y)是一种可以帮助所有人获得服务的设计和创造。无障碍辅助功能是使得辅助技术正确解读网页的必要条件

// TODO: WAI-ARIA：网络无障碍协议-无障碍互联网应用文件包含了创建完全无障碍JavaScript部件所需要的技术。

// JSX支持所有aria-* HTML属性。跟React的DOM变量和属性命名都使用驼峰命名不同的是，aria-*使用带连字符的命名法

// 栗子
{/* <input type="text"
    aria-label="text"
    aria-required="true"
/> */}

// TODO: 语义化的HTML
// 是无障碍辅助功能网络应用的基础。利用多种HTML元素来强化您的网站中的信息通常可以使您直接获得无障碍辅助功能
// 有时候语义化的HTML会被破坏，这时应该使用React Fragments 来组合各个组件
function ListItem({ item }) {
    return (
        <Fragment>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
        </Fragment>
    );
}
function Glossary(props) {
    return (
        <dl>
            {props.item.map(item => {
                <ListItem item={item} key={item.id} />
            })}
        </dl>
    );
}
// 和其他元素一样，你可以把一些列的对象映射到一个 fragment 的数组中
function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => {
                <Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </Fragment>
            })}
        </dl>
    );
}
// 当你不需要在fragment标签中添加任何prop且你的工具支持的时候，你可以使用短语法
function ListItem() {
    return (
        <>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
        </>
    );
}

// TODO: 无障碍表单

<div>
    {/* for在JSX中应该被写作htmlFor */}
    <label htmlFor="namedInput">Name:</label>
    <input id="namedInput" type="text" name="name" />
</div>

// TODO: 控制焦点
// 确保你的网络应用在即使只有键盘的环境下正常工作

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创造一个textInput DOM 元素的 ref
        this.textInput = React.createRef();
    }
    focus() {
        // 使用原始的 DOM API 显式地聚焦在 text input 上
        // 通过 current 来获得 DOM 节点
        this.textInput.current.focus();
    }
    render() {
        // 使用 ref  回调函数以在实力的一个变量中存储文本输入 DOM 元素
        return (
            <input type="text" ref={this.textInput} />
        );
    }
}
