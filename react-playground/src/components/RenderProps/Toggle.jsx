import { Component } from "react";

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            on: !this.state.on
        });
    }
    render() {
        // 使用render
        return this.props.render({
            on: this.state.on,
            toggle: this.toggle
        });
        // 使用children
        // return this.props.children({
        //     on: this.state.on,
        //     toggle: this.toggle
        // });
    }
}

export default Toggle;