import React from "react";

const hightOrderComponents = (initial,WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                on: initial
            }
            this.toggle = this.toggle.bind(this);
        }
        toggle() {
            this.setState({
                on: !this.state.on
            });
        }
        render() {
            const newProps = {
                ...this.props,
                on: this.state.on,
                toggle: this.toggle
            }
            return <WrappedComponent {...newProps} />
        }
    }
};




export default hightOrderComponents;