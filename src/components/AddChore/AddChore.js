import React, { Component } from 'react';

class AddChore extends Component {
    constructor(props){ 
        super(props);

        this.state = {
            chore: {
                name: '',
                frequency: ''
            },
        } // end this.state
    } //end constructor


    handleChangeFor = propertyName => event => {
        this.setState({
          chore: {
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
                <input type="text" id="name" value={this.state.chore.name} onChange={this.handleChangeFor('name')}/>
                <br/>
                <label >Frequency</label>
                <select value={this.state.chore.frequency} onChange={this.handleChangeFor('frequency')}>
                        <option value="">- Select -</option>
                        <option value="1">Every Day</option>
                        <option value="2">Every 2 Days</option>
                        <option value="3">Every 3 Days</option>
                        <option value="4">Every 4 Days</option>
                        <option value="5">Every 5 Days</option>
                        <option value="6">Every 6 Days</option>
                        <option value="7">Once a Week</option>
                        <option value="14">Every Other Week</option>
                        <option value="30">Once a Month</option>
                    </select>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddChore;