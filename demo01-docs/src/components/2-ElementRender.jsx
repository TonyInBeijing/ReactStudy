/**
 * @description 元素渲染
 * @author YHW 2021-07-07
 */

// TODO： 元素是构成React应用的最小砖块

import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>; // 这是一个元素

// HTML文件里有一个id为root的元素 例如 <div id="root"></div>

ReactDOM.render(element, document.getElementById("root")); // 将element渲染到root节点中

// TODO： React元素是不可改变对象。一旦被创建，就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的UI。

function tick() {
    const element = (
        <div>
            <h1>Hello, world</h1>
            <h2>It is {new Date().toLocaleDateString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
}
setInterval(tick, 1000);

// TODO: React只更新它需要更新的部分
// React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。