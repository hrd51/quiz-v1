import React, { useContext } from 'react';
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

export default function MainMenu(){
  //eslint-disable-next-line no-unused-vars
  const {gamestate , setGameState } = useContext(QuizContext);

    return(
        <div className='Menu'> 
          <button 
           onClick={() =>{
            setGameState("quiz");
            }}
          >
            はじめる！
          </button>
        </div>
    )
}