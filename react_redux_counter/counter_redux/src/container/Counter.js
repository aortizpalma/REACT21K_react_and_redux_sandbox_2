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
                        <button onClick={this.props.onIncCounterX}>Add five</button>
                        <button onClick={this.props.onDecCounter}>Remove one</button>
                        <button onClick={this.props.onDecCounterX}>Remove five</button>
                        <button onClick={this.props.resetCounter}>Reset</button>

                    </div>
                    <button onClick={this.props.onStoreResults}>Store the result</button>

                    <div>
                        <ul>
                            {this.props.storedResults.map((item)=>(
                                <li
                                key={item.id}
                                onClick={() => this.props.onRemoveResult(item.id)}>
                                {item.value}
                                </li>
                            ))}
                            {/* <li>{this.props.storedResults.[0].value}</li> */}
                        </ul>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onIncCounterX: () => dispatch({ type: actionTypes.INCREMENT_X, value: 5 }),
        onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onDecCounterX: () => dispatch({ type: actionTypes.DECREMENT_X, value: 5 }),
        resetCounter: () => dispatch({ type: actionTypes.RESET }),
        onStoreResults: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onRemoveResult: (id) => dispatch({ type: actionTypes.REMOVE_RESULT, item: id }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (Counter);