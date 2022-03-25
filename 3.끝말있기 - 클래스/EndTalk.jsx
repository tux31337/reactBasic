const React = require('react');
const ReactDom = require('react-dom');

const EndTalk = () => {
    const [beforevalue, setBeforeValue] = React.useState('이종민');
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);
    
    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onAdd = () => {
        if(beforevalue.charAt(beforevalue.length - 1) === value.charAt(0)) {
            setResult("정답!");
            setBeforeValue(value);
            setValue('');
            inputRef.current.focus();
        } else {
            setResult("실패");
            setValue('');
            inputRef.current.focus();
        }
    }

    return (
        <>
            <div>끝말있기 값을 입력하세요 : {beforevalue}</div>
            <input ref={inputRef} onChange={onChangeInput} value={value}/>
            <button onClick={onAdd}>입력</button>
            <div>{result}</div>
        </>
    )
}


module.exports = EndTalk;