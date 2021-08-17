import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../container/Counter.css';

import * as actionTypes from '../actions/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Redux Counter</h1>
                <h2>Your count: <span className="score">{this.props.ctr}</span></h2>
                    <div>
                        <button onClick={this.props.onIncCounter}>Add one</button>
                        <button onClick={this.props.onDecCounter}>Remove one</button>
                        <button onClick={this.props.resetCounter}>Reset</button>
                        <button>Button 4</button>

                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        resetCounter: () => dispatch({ type: actionTypes.RESET }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (Counter);