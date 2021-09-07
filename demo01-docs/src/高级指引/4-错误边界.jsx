/**
 * @description 错误边界
 * @author YHW 2021-09-07
 */

// TODO: 错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI

import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // 更新state使下一次渲染能够显示降级后的UI
        return { hasError: true }

    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }
    render() {
        if (this.state.hasError) {
            return <div>Something went wrong</div>
        }
        return this.props.children;
    }

}

// 使用
<ErrorBoundary>
    <div></div>
</ErrorBoundary>