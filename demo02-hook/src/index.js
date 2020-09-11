import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useChangeStatus from './customerHook';

function Example() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    const [myString, setString] = useState('Hello');
    const checkRes = useChangeStatus(count % 2);
    useEffect(() => {
        document.title = myString + count.toString();
    });
    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
      </button>
            </div>
            <div>
                <p>My string is : {myString}</p>
                <button onClick={() => setString('Hello World')}>
                    Change String
      </button>
            </div>
            <div>
                <p>My status is : {checkRes.toString()}</p>
            </div>
        </div>

    );
}

ReactDOM.render(<Example />, document.getElementById('root'));
