import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      choreList: [
      'Clean Kitchen Surfaces', 
      'Vaccuum Dining Room Rug', 
      'Clean Thorin\'s Cage'
      ],
    };
  }
  choreListItemArray
  render() {
    let choreListItemArray = this.state.choreList.map(chore => <label><input type="checkbox" value={chore}/> {chore}</label>);
    console.log('choreListItemArray', choreListItemArray)
        return (
      <div className="App">
        <form>
           {choreListItemArray}
       </form>
      </div>
    );
  }
}

export default App;
