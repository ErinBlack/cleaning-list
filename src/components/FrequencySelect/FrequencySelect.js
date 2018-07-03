import React, { Component } from 'react';

class FrequencySelect extends Component {
    render() {
        return(
            <option value={this.props.choiceValue}>{this.props.choiceText}</option>
        )
    }
}

export default FrequencySelect;