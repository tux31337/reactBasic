import React, {Component} from 'react';
import Try from './Try';

const getNumbers = () => {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }

    onSubmitForm = (e) => {
        const { value, tries, answer} = this.state;
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')) {
            this.setState((prevState) => {
                return {
                        result: '홈럼!',
                        tries: [...this.prevState.tries, {try: value, result: '홈런!'}],
                }
            })
            alert('게임을 다시 시작합니다');
            this.setState({
                value : '',
                answer: getNumbers(),
                tries:[],
            })
        } else { // 답이 틀릴경우
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            console.log(this.state.answer.join(','));
            if (this.state.tries.length >= 9) { // 10빈 이상틀렸을때
                
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다!`,
                });
                alert('게임을 다시 시작합니다');
                this.setState({
                    value : '',
                    answer: getNumbers(),
                    tries:[],
                });
            this.inputRef.focus();
            } else {
                console.log(this);

                for(let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState( {
                    tries: [...this.state.tries, {try: this.state.value, result : `${strike} 스트라이크, ${ball} 볼`}]
                })
            }
        }
    };

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    inputRef;

    onInputRef = (c) => {this.inputRef = c;};

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={(c) => { this.onInputRef }}maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                   {this.state.tries.map((v, i) => {
                       return(
                           <Try key={`${i + 1}차 시도 : `} tryInfo={v} />
                       )
                   })}
                </ul>
            </>
        )
    }
}

export default NumberBaseball;