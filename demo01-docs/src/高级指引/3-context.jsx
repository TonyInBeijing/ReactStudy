/**
 * @description context
 * @author YHW 2021-07-13
 */

import React from 'react';

// TODO: Context提供了一个无需为每层组件手动添加props，就能在组件树间进行数据传递的方法

// TODO: 何时使用Context
// Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。

// Contenxt可以让我们无须明确地传递每一个组件，就能将值深入传递进组件树
const ThemeContext = React.createContext('light');
class App extends React.Component {
    render() {
        return (
            // 使用一个Provider 来将当前的 theme 传递给以下的组件树
            // 无论多深。任何组件都能读取这个值
            // 在这个例子中，我们将 dark 作为当前值传下去
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

// 中间的组件再也不必指明往下传递 theme 了
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值
    // 在这个例子中，当前的 theme 值为 “dark”
    static contextType = ThemeContext;
    render() {
        return <button theme={this.context} />
    }
}

// TODO: 使用Context之前的考虑
// Context 主要应用场景在于“很多”不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差

// TODO: 如果只是想避免一层层传递一些属性，“组件组合”有时候是一个比context更好的解决方案（将一整个组件传递下去）
// 这种对组件的 “控制反转” 减少了需要传递的 props 的数量，但是会导致高层组件更加复杂，并且强行让低层组件适应这样的形式

// TODO: API
// TODO: React.createContext
const MyContext = React.createContext(defaultValue);
// 创建一个Context对象。当React渲染一个订阅了这个Context对象的组件，这个组件会从组件树中离自身最近的那个匹配的Provider中读取到当前的context值
// “只有”当组件所处的树中没有匹配到Provider时，defaultValue参数才会生效。注意：将undefined传递给Provider的value时，消费组件的defaultValue不会生效

// TODO: Context.Provider
<MyContext.Provider value="value"></MyContext.Provider>
// 每个Context对象都会返回一个 Provider React组件，允许消费组件订阅context的变化
// Provider接收一个value属性，传递给消费组件。一个Provider可以和多个消费组件有对应关系。多个Provider可以嵌套使用，里层的会覆盖外层的数据
// 当Provider的value值发生变化时，它内部所有的消费组件都会重新渲染。Provider及其内部的consumer组件都不受制于shouldComponentUpdate函数，因此consumer组件在其祖先组件退出更新的情况下也能更新

// 通过新旧检测来确定变化，使用了与Object.is相同的算法

// TODO: Class.contextType

class Myclass extends React.Component {
    // 也可以这写
    static contextType = MyContext;
    componentDidMount() {
        let value = this.context;
        // 组件挂载完成后，使用MyContext组件的值来执行一些有副作用的操作
    }
    componentDidUpdate() {
        let value = this.context;
    }
    componentWillUnmount() {
        let value = this.context;
    }
    render() {
        let value = this.context;
        // 基于 MyContext 组件的值进行渲染
    }
}
MyClass.contextType = MyContext;
// 挂载在class上的contextType属性会被重新赋值为一个由React.createContext()创建的对象。此属性能让你使用this.context来消费最近Context上的那个值。

// TODO: Context.Consumer
<MyContext.Consumer>{value => <div>{value}</div>}</MyContext.Consumer>
// 一个 React组件可以订阅context的变更，此组件可以让你在函数式组件中可以订阅context
// 这种方法需要一个 函数作为子元素。这个函数接收当前的context值，并返回一个React节点。传递给函数的value值等价于组件树上方离这个context最近的Provider提供的value值。如果没有对应的Provider，value参数等同于传递给createContext()的defaultValue

// TODO: 消费多个Context
// 为了确保context快速进行重渲染，React需要使每一个consumers组件的context在组件树中成为一个单独的节点

// Theme context 默认的 theme 是 light 值
const ThemeContext = React.createContext('light');
// 用户登录 context
const UserContext = React.createContext({ name: 'Guest' });

class App extends React.Component {
    render() {
        const { signedInUser, theme } = this.props;
        // 提供初始 context 值的 App 组件
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

function Layout() {
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    );
}

// 一个组件可能会消费多个 context
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme} />
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

// TODO: 注意事项
// 因为 context 会使用参考标识（reference identity）来决定何时进行渲染，这里可能会有一些陷阱，当provider的“父组件”进行重渲染时，可能会在consumers组件中触发意外的渲染

// 例子
class App extends React.Component {
    render() {
        return (
            <MyContext.Provider value={{ something: 'something' }}>
                <Toolbar />
            </MyContext.Provider>
        );
    }
}

// 修改为：

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            something: 'something'
        }
    }
    render() {
        return (
            <MyContext.Provider value={this.state.something}>
                <Toolbar />
            </MyContext.Provider>
        );
    }
}
