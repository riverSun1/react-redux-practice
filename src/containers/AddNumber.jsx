// redux랑 직접적으로 상호작용 하는 곳.
// AddNumber 컴포넌트를 감싸는 새로운 컴포넌트
// 이 컴포넌트는 리덕스의 store를 핸들링한다.
// 이 컴포넌트는 리덕스가 세상에 존재하고 있는지 모른다.

import AddNumber from "../components/AddNumber";
import React, { Component } from "react";
import store from '../store';

export default class extends Component{
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size:size});
        }.bind(this)}></AddNumber>
    }
}