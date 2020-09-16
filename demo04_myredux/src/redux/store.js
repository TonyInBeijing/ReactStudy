import { createStore } from 'redux';

// 定义初始state
const initState = {
    balance: 0,
};
// 定义action
const actionCreator = (type, num) => ({
    type, num
});
// 定义reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, balance: state.balance + action.num };
        case "MINUS":
            return { ...state, balance: state.balance - action.num };
        default:
            return state;
    }
}
// 创建store
let store = createStore(reducer);

// 订阅state变化
store.subscribe(() => {
    console.log(store.getState());
});

export { store, actionCreator };
