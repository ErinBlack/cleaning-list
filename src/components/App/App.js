import React, { Component } from 'react';
import ChoreItem from '../ChoreItem/ChoreItem';
import AddChore from '../AddChore/AddChore';


let choreList = [
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
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      choreList: choreList
    }
  } // end constructor props

  addChore = (chore) => {
    this.setState({
      choreList: [...this.state.choreList, chore]
    })
  }

  render() {
    return (
        <div className="App">
          <div>
            {<AddChore choreList={this.state.choreList} addChore={this.addChore}/>}
          </div>
          <form >
            {this.state.choreList.map((chore, i) => <ChoreItem key={i} chore={chore.name} />)}
        </form>
        </div>
      );
  }
}

export default App;
