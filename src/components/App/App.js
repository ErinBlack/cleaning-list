import React, { Component } from 'react';
import ChoreItem from '../ChoreItem/ChoreItem';

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
    let choreListItemArray = this.state.choreList.map((chore, i) => {
      return (<ChoreItem key={i} chore={chore} />)
    });
    console.log('choreListItemArray', choreListItemArray)
        return (
      <div className="App">
        <form >
           {choreListItemArray}
       </form>
      </div>
    );
  }
}

export default App;
