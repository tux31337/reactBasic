const React = require('react');
const ReactDom = require('react-dom');

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onAdd = (e) => {
        if (parseInt(value) === first * second) {
            setResult(`정답은 ${value}`);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult(`틀렸습니다`);
            setValue('');
            inputRef.current.focus();
        }
    }
    return (
        <>
            <div>{first} 곱하기 {second}는??</div>
            <input ref={inputRef} onChange={onChangeInput} value={value} />
            <button onClick={onAdd}>입력!</button>
            <div>{result}</div>
         </>)
}

module.exports = GuGuDan;