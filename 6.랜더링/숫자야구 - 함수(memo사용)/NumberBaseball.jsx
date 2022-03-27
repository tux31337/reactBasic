import React, {useState} from 'react';
import Try from './Try';

const getNumbers = () => {
    const candidates = [1,2,3,4,5,6,7,8,9];

    const array=[];

    for(let i=0; i<4; i++){

        const chose = candidates.splice(Math.floor(Math.random()*(9-i)),1)[0];

        array.push(chose);

    }

    console.log('답은 : ', array.join(''));

    return array;

};



const NumberBaseball = ()=>{

    const [result, setResult] = useState('');

    const [value, setValue] = useState('');

    const [answer, setAnswer] = useState(getNumbers());

    const [tries, setTries] = useState([]);



    const onSubmitForm = (e)=>{
        e.preventDefault();

        if(value === answer.join('')){

            setResult('홈런');

            setTries((prevTries)=>{

                return [...prevTries,{try :  value, result :'홈런'}];

            })

            alert('게임을 다시 시작합니다.!')

            setValue('');

            setAnswer(getNumbers());

            setTries([]);



        }else{

            const valueArray = value.split('').map(v=>parseInt(v));

            let strike = 0;

            let ball = 0;

            if(tries.length >= 9){

                setResult(`10번 틀려서 실패! 답은  ${answer.join(',')}`);

                alert('게임을 다시 시작합니다');

                setAnswer(getNumbers());

                setValue('');

                setTries([]);

            }else{

                for(let i=0; i<4; i++){

                    if(valueArray[i] === answer[i]){

                        strike += 1;

                    }else if(answer.includes(valueArray[i])){

                        ball += 1;

                    }

                }

                setTries((prevTries)=>{

                    return [...prevTries, {try: value, result : `strkie : ${strike}, ball : ${ball}`}];

                })

                setValue('');

            }

        }

    };

    const onChangeInput = (e)=>{

        setValue(e.target.value);

    };

   
    return(
        <>

            <h1>{result}</h1>

            <form onSubmit={onSubmitForm}>

                <input maxLength={4} value={value} onChange={onChangeInput} />

                <button>입력</button>

            </form>

            <div>시도 : {tries.length}</div>

            <ul>

                {

                    tries.map((v,i)=>{

                        return (

                            <Try key={v+'0'+i} tryInfo={v} index={i}></Try>

                        );

                    })

                }

            </ul>

        </>
    );
}
export default NumberBaseball;