import React, { Component } from 'react';

class ChoreItem extends Component {
    render() {
        return (
            <label className="c-checklist__item">
                <input type="checkbox" value={this.props.chore}/> {this.props.chore} <br />
            </label>
        ); // end return
    } // end render
} // end extends

export default ChoreItem;