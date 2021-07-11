/**
 * @description 列表&key
 * @author YHW 2021-07-08
 */

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((item, index) => <li key={index}>{item}</li>);
    // TODO： key帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识
    // TODO： key只是在 **兄弟节点中必须唯一**
    // TODO： **万不得已** 你可以使用元素索引 index 作为 key
    // 如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。
    return (
        <ul>{listItems}</ul>
    );
}

export default NumberList;