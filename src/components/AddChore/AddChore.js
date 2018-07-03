import React, { Component } from 'react';
import FrequencySelect from '../FrequencySelect/FrequencySelect';

const frequencyChoices = [
    {
        text: '- Select -',
        value: 0
    },
    {
        text: 'Every Day',
        value: 1
    },
    {
        text: 'Every Other Day',
        value: 2
    },
    {
        text: 'Every Week',
        value: 7
    },
    {
        text: 'Every Other Week',
        value: 14
    },
    {
        text: 'Once a Month',
        value: 30
    },
];

class AddChore extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            newChore: {
                name: '',
                frequency: ''
            },
        } // end this.state
    } //end constructor


    handleChangeFor = propertyName => event => {
        this.setState({
          newChore: {
            ...this.state.chore,
           [propertyName]: event.target.value,
          }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const choreList = this.props.choreList;
        // call function in App.js
        this.props.addChore(this.state.chore);
        
        // reset the form
        this.setState({
            chore: {
              name:'',
              frequency: '',
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label >New Chore</label>
                <input type="text" id="name" value={this.state.newChore.name} onChange={this.handleChangeFor('name')}/>
                <br/>
                <label >Frequency</label>
                <select value={this.state.newChore.frequency} onChange={this.handleChangeFor('frequency')}>
                    {frequencyChoices.map((choice, i) => <FrequencySelect key={i} choiceText={choice.text} choiceValue={choice.value}/>)}
                </select>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddChore;