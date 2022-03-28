import React, { Component, useRef, useState } from "react";


const ResponseCheck = () => {
    const [state, setState] = useState("waiting");
    const [message, setMessage] = useState("클릭해서 시작하세요");
    const [result, setResult] = useState([]);

    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();


    const onClickScreen = () => {
        if(state === "waiting") {
            setState("ready");
            setMessage("초록색이 되면 클릭하세요");
            timeout.current = setTimeout(() => {
               setState("now");
               setMessage("지금클릭");
               startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if(state === "ready") {
            clearTimeout(timeout.current);
            setMessage("너무 성급하셨네요");
            setState("waiting");
        } else if(state === "now") {
            endTime.current = new Date();
            setState("waiting");
            setMessage("클릭해서 시작하세요.");
            setResult((prevState) => {
                return [...prevState, endTime.current - startTime.current];
            });

        }
    }

    const onClickReset = () => {
        setResult([]);
    }

    const renderAverage = () => {
        return result.length === 0 ? 
                                null : 
                                <>
                                    <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
                                    <button onClick={onClickReset}>리셋</button>
                                </>
    };

    return(
        <>
            <div id = "screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </>
    )
}

export default ResponseCheck;