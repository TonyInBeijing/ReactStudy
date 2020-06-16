import React, { Component } from 'react';

class App extends Component {
    render() {
        // 不用jsx
        // const li1 = React.createElement('li', null, 'Hello World!');
        // const li2 = React.createElement('li', null, 'Hello Tony!');
        // const root = React.createElement('ul', { className: 'mylist' }, li1, li2);
        return (
            <ul className="my-list">
                <li>Hello World!</li>
                <li>Hello Tony!</li>
            </ul>
        );
    }
}
export default App;