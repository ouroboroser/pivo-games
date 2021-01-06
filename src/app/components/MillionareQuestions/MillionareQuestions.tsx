import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import './MillionareQuestions.scss';
import { getPictureName } from '../helpers/getPictureName';

type MillionaireParams = {
    questionNumber: string,
}

type MillionaireProps = RouteComponentProps<MillionaireParams>;

const MillionareQuestions: React.FC<MillionaireProps> = ({match}) => {
    let questionNumber = Number(match.params.questionNumber);
    console.log('question number', questionNumber)
    const data = JSON.parse(localStorage.getItem('gameMillionare') || '{}')
    const game = data[questionNumber];
    const answers = game.options;
    const pictureName = getPictureName(questionNumber);
    
    const giveAnswer = answersId => {
        const trueAnswer = game.answerId;
        let questionsQuantityCorrect:any = localStorage.getItem('questionsQuantityCorrect') || 0
        let points:any = localStorage.getItem('points') || 0
        let step = 1000;
        
        if (answersId === trueAnswer) {
            console.log('win')
            console.log('answer id: ', answersId);
            console.log('true answer: ', trueAnswer);
            questionsQuantityCorrect = Number(questionsQuantityCorrect) + 1;
            points = Number(points) + step;
            localStorage.setItem('questionsQuantityCorrect', questionsQuantityCorrect)
            localStorage.setItem('points', points);
            if (questionNumber < 9) {
                window.location.href = `/millionaire-process/${questionNumber + 1}`
            } else {
                window.location.href = '/millionaire-finish'
            }
        } 

        if (answersId !== trueAnswer || questionNumber > 9) {
            window.location.href = '/millionaire-finish'
            console.log('lose');
        }
    }


    return (
        <div className = 'wrapper'>
            <div className = 'picture'>
                <img src={`${process.env.PUBLIC_URL}/img/${pictureName}`} alt='login'  width = '600'/>
            </div>
            <div className = 'process'>
            <div className = 'processQuestions'>
            <p> {game.questionText} </p>
            </div>
            <div className = 'processAnswers'>
                <div className = 'processAnswersGeneral processAnswersZero' onClick = {() => giveAnswer(0)}>{answers[0]} </div>
                <div className = 'processAnswersGeneral processAnswersOne' onClick = {() => giveAnswer(1)} >{answers[1]}</div>
            </div>
            <div className = 'processAnswers'>
                <p className = 'processAnswersGeneral processAnswersTwo' onClick = {() => giveAnswer(2)} >{answers[2]}</p>
                <p className = 'processAnswersGeneral processAnswersThree' onClick = {() => giveAnswer(3)}>{answers[3]}</p>
            </div>
        </div>
        </div>
    )
}

export default withRouter(MillionareQuestions);