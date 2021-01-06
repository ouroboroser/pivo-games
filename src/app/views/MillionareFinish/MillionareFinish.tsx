import React from 'react';
import { Link } from 'react-router-dom';
import './MillionareFinish.scss';

export const MillionareFinish = () => {
    // const questionsQuantityCorrect = localStorage.getItem('questionsQuantityCorrect');
    const totalPoints = localStorage.getItem('points');
    //const finish = getFinishPicture(questionsQuantityCorrect);
    
    const restartGame = () => {
        localStorage.removeItem('questionsQuantity');
        localStorage.removeItem('questionsQuantityCorrect')
        localStorage.removeItem('points')
        localStorage.removeItem('gameMillionare');
    }

    return(
        <div className = 'finish'>
            <div className = 'finishTitle'>
                <p> End </p>
                <p> Points: <span className = 'finishTitlePoints'> {totalPoints} </span> </p>
                <p className = 'finishBtn' onClick = {() => restartGame()} > <Link className = 'finishLink' to = '/millionare' > Restart </Link> </p>
            </div>
            <div className = 'finishImg'>
                <img src={`${process.env.PUBLIC_URL}/img/giveaway`} alt='login'  width = '600'/>
            </div>
        </div>
    )
}