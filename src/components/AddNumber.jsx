// 부품으로써의 코드.
// 이 부품은 우리 애플리케이션 안에서도 여러 군데에 사용할 수 있고,
// 우리 애플리케이션이 아닌 다른 애플리케이션에서도 원한다면 사용할 수 있다.

import React, { Component } from 'react';
import store from '../store';

export default class AddNumber extends Component {
    state={size:1} // 얼만큼 증가할 것인가.
    // binde - 익명 함수에 this 값이 없을 때 강제로 this를 주입하는 방법
    render() {
        return (
            <div>
                <h1>Add Number</h1>
                {/* + 버튼을 클릭하면 이벤트를 통해 상위 컴포넌트로 갈 수 있다.
                + 버튼을 눌렀을 때 컴포넌트에 설치된 props의 onClick 이벤트를 호출시켜줘야 한다.
                그때 이 컴포넌트의 state인 size 값을 같이 전달합니다.*/}
                <input type="button" value="+" onClick={function(){
                    this.props.onClick(this.state.size)
                }.bind(this)}></input>

                <input type="text" value={this.state.size} onChange={function(e){ // 바뀐 값으로 나타냄
                    this.setState({size:Number(e.target.value)}); // 값을 받음
                }.bind(this)}></input>

            </div>
        )
    }
}