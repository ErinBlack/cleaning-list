import React, { Component } from 'react';
import ChoreItem from '../ChoreItem/ChoreItem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      choreList: [
        {
          name: 'Clean Kitchen Surfaces',
          frequency: 3,
          lastCompleted: '05/29/2018 22:50:4',
        },
        {
          name: 'Vaccuum Dining Room Rug',
          frequency: 14,
          lastCompleted: '05/27/2018 17:50:4'
        },
        {
          name: 'Clean Thorin\'s Cage',
          frequency: 7,
          lastCompleted: '05/24/2018 17:50:4'
        } 
      ],
    };
  }
  choreListItemArray
  render() {
    let choreListItemArray = this.state.choreList.map((chore, i) => {
      return (<ChoreItem key={i} chore={chore.name} />)
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
