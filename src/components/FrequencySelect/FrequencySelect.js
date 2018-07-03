import React, { Component } from 'react';

class FrequencySelect extends Component {
    render() {
        return(
            <option value={this.props.choiceValue}>{this.props.choiceText}</option>
        ); // end return
    } // end render
} // end extends

export default FrequencySelect;