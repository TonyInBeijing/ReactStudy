import React from "react";
import Toggle from "./Toggle";

class RenderProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {/* 1.使用props.render */}
                <Toggle render={({ on, toggle }) => (<>
                    <button onClick={toggle}>toggle!!!</button>
                    <p>{on ? "Toggle On" : "Toggle Off"}</p>
                </>)} />
                {/* 2.使用props.children */}
                {/* <Toggle>
                    {({ on, toggle }) => (
                        <>
                            <button onClick={toggle}>toggle!!!</button>
                            <p>{on ? "Toggle On" : "Toggle Off"}</p>
                        </>
                    )}
                </Toggle> */}
                {/* 也可以这么写 */}
                {/* <Toggle children={
                    ({ on, toggle }) => (<>
                        <button onClick={toggle}>toggle!!!</button>
                        <p>{on ? "Toggle On" : "Toggle Off"}</p>
                    </>)
                }></Toggle> */}
            </div>
        );
    }
}

export default RenderProps;