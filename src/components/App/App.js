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
    let choreListItemArray = this.state.choreList.map(chore => {
      return (<label className="c-checklist__item">
                <input type="checkbox" value={chore}/> {chore} <br />
              </label>
       )});
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
