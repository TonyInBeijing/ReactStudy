// 实现 redux 的 createStore
const createStore = reducer => {
    let state; // state记录所有状态
    let listeners = []; // 保存所有注册的回调

    // store.subscribe
    const subscribe = callback => {
        listeners.push(callback); // subscribe就是将回调保存下来
    }
    // store.dispatch
    const dispatch = action => {
        // 先调用 reducer 修改 state
        state = reducer(state, action);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener(); // 将所有回调依次执行
        }
    }
    // store.getState
    const getState = () => {
        // return state; // 直接返回state
        return state;
    }

    // 构造store对象
    const store = {
        subscribe,
        dispatch,
        getState
    };

    return store;

}



export default createStore;


