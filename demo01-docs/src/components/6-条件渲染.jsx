/**
 * @description 条件渲染
 * @author YHW  2021-07-08
 */

import React from "react";

// TODO: React中的条件渲染和JavaScript中的一样，使用JavaScript运算符if或者条件运算符去创建元素来表现当前的状态，然后让React根据它们来更新UI

function UserGreeting() {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    else {
        return <GuestGreeting />;
    }
}

// TODO: 元素变量：可以用变量来储存元素额，可以帮助有条件地渲染组件一部分，而其他的渲染部分并不会因此而改变

function LoginButton(props) {
    return (<button onClick={props.onClick}>
        Login
    </button>);
}
function LogoutButton(props) {
    return (<button onClick={props.onClick}>
        Logout
    </button>);
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        // 三目运算符
        button = isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />;
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;