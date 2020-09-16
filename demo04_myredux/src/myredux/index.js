import createStore from '../myredux/createStore';

// 初始化state
const initState = {
    balance: 1
};

// 定义一下actionCreator
const actionCreator = (type, value) => ({
    type, value
});
// 定义一个 reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, balance: state.balance + action.value };
        case "MINUS":
            return { ...state, balance: state.balance - action.value };
        default:
            return state;
    }
}
const store = createStore(reducer);

export { store, actionCreator }