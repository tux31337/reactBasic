import React, {PureComponent} from 'react';

class Test extends PureComponent {
    state = {
        counter: 0,
    };



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

