import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello React-Redux !
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
