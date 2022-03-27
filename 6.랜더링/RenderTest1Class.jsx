import React, {Component} from 'react';

class Test extends Component {
    state = {
        counter: 0,
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }

    onClick = () => {
        this.setState({});
    }

    render() {
        console.log('랜더링', this.state);
        return (
            <dl>
                <button onClick={this.onClick}>클릭</button>
            </dl>
        )
    }
}

export default Test;

