import React from "react";


class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const {on,toggle} = this.props;
        return (
            <>
            <button onClick={toggle}>Toggle!!!</button>
            <p>{on ? "Toggle On" : "Toggle Off"}</p>
            </>
        );
    }
}

export default Toggle;