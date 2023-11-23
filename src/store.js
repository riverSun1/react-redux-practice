import { createStore } from 'redux';

export default createStore(function(state, action){
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size} // 기존 state number + action.size
        // ...state - state들을 복제. 그 복제된 state에서 뒤에 추가되는 property의 값만을 변형시키는 코드이다. => immutable이랑 관련됨.
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())