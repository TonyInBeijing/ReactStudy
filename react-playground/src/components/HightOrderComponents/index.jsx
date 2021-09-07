import React from "react";
import hightOrderComponents from "./hightOrderComponent";
import Toggle from "./Toggle";

const HighOrderToggle = hightOrderComponents(false, Toggle);

class HighOrderComponent extends React.Component {
    render() {
        return (
            <>
                <HighOrderToggle />
            </>
        );
    }
}

export default HighOrderComponent;