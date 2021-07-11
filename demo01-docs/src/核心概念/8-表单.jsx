/**
 * @description 表单
 * @author YHW 2021-07-09
 */

import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            textarea: "",
            select: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const targetValue = event.target.value;
        const targetName = event.target.name;
        // 根据元素name赋值
        this.setState({ [targetName]: targetValue });
    }
    handleSubmit(event) {
        alert("name:" + this.state.input + "|" + this.state.textarea + "|" + this.state.select);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input name="input" type="text" value={this.state.input} onChange={this.handleChange} />
                </label>
                <label>
                    文章：
                    <textarea name="textarea" value={this.state.textarea} onChange={this.handleChange} />
                </label>
                <label>
                    选择你喜欢的风味:
                    <select name="select" value={this.state.select} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }

}
export default NameForm;