const React = require('react');
const ReactDom = require('react-dom');
const { Component } = React;

class WordReplay extends Component {
    state = {
        text: 'Hello, webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordReplay;

