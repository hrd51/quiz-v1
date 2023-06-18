import React, { useContext } from 'react';
import { QuizContext } from "../Helpers/Contexts";
import {Questions} from '../Helpers/QuestionBank'; 
import "../App.css";

function EndScreen( ){
    const { score, setScore, setGameState  } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
    }

    return(
        <div className='EndScreen'>
            {""}
            <h1>お疲れ様でした！</h1>
            <h3>
                {score} / {Questions.length}{""} 
            </h3>
            <bottun onClick={restartQuiz}>もう一度チャレンジ</bottun>
           
        </div>
    )
}

export default  EndScreen;