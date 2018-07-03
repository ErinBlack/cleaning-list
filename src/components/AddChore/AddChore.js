import React, { Component } from 'react';
import FrequencySelect from '../FrequencySelect/FrequencySelect';

const frequencyChoices = [
    {
        text: '- Select -',
        value: ''
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
]; // end frequencyChoices

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
        console.log('in handleChangeForm with', event.target.value)
        this.setState({
          newChore: {
            ...this.state.newChore,
           [propertyName]: event.target.value,
          } // end newChore
        }) // end setState
    } // end handleChangeFor

    handleSubmit = (e) => {
        console.log('in handleSubmit with',this.state.newChore )
        e.preventDefault();
        // const choreList = this.props.choreList;
        // call function in App.js
        this.props.addChore(this.state.newChore);
        
        // reset the form
        this.setState({
            chore: {
              name:'',
              frequency: '',
            }
        }) // end setState
    } // end handleSubmit

    

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
        ); // end return
    } // end render
} // end extends

export default AddChore;