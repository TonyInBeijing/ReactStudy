/**
 * @description 状态提升
 * @author YHW 2021-07-09
 */

//TODO: 通常，多个组件需要反映相同的变化数据，这时我们建议将共享的状态提升到最近的共同父组件中

import React from "react";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    else {
        return <p>The water would not boil.</p>;
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};


// 摄氏度华氏度转换
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperatrue, convert) {
    const input = parseFloat(temperatrue);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        // this.setState({ temperatrue: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperatrue in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
                {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
            </fieldset>
        );
    }
}


export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperatrue: '',
            scale: 'c'
        };
    }
    handleCelsiusChange(temperatrue) {
        this.setState({ scale: 'c', temperatrue });
    }
    handleFahrenheitChange(temperatrue) {
        this.setState({ scale: 'f', temperatrue });
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperatrue;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperatrue={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperatrue={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }

}