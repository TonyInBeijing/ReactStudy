/**
 * @description 代码分割
 * @author YHW 2021-07-12
 */

import React, { Suspense } from "react";

// TODO: 打包是一个将文件引入合并到一个单独文件的过程，最终形成一个“bundle”，接着在页面上引入该bundle，整个应用即可一次性加载

// app.js
import { add } from "./math.js";
console.log(add(1, 2)); // 3

// math.js
export function add(a, b) {
    return a + b;
}


// 打包后
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));// 3

// TODO: import()
// 在应用中引入代码分割的最佳方式是通过动态import()语法

import("./math").then(math => {
    console.log(math.add(1, 2));
})

// TODO: React.lazy（不支持服务端渲染）

// 使用之前
import OtherComponent from "./OtherComponent";
// 使用之后
const OtherComponent = React.lazy(() => import("./OtherComponent"));

// React.lazy接受一个函数，这个函数需要动态调用import().它必须返回一个Promise，该Promise需要resolve一个 default export的React组件
// 然后应在Suspense组件中渲染lazy组件，如此使得我们可以使用在等待加载lazy组件时做优雅降级（如loading指示器等）

// 异常捕获边界
// 如果模块加载失败，它会触发一个错误
import ErrorBoundary from "./ErrorBoundary";
function MyComponent() {
    return (
        <div>
            <ErrorBoundary>
                {/* Suspense组件置于懒加载组件之上的任何位置。你甚至可以用一个Suspense组件包裹多个懒加载组件 */}
                <Suspense fallback={<div>Loading...</div>}>
                    {/* fallback属性接受任何在组件加载过程中你想展示的React元素 */}
                    <OtherComponent />
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

// 基于代码的路由分割
import {} from 'react-router-dom'

