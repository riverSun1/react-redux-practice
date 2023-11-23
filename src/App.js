import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

// function App() {
//   return (
//     <div className="App">
//       <h1>Root</h1>
//       <AddNumberRoot></AddNumberRoot>
//       <DisplayNumberRoot></DisplayNumberRoot>
//     </div>
//   );
// }

// export default App;

// state를 갖기 위해서는 function방식대로 하면 복잡하므로 class로 바꿔준다.
class App extends Component {
  state = {number:0}
  render(){
    return (
      <div className="App">
        
        <h1>Root</h1>

        <AddNumberRoot onClick={function(size){
          this.setState({number:this.state.number + size});
        }.bind(this)}></AddNumberRoot>

        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      
      </div>
    );
  }
}

export default App;