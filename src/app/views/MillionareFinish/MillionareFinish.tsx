import React from 'react';
import { getFinishPicture } from '../../components/helpers/getFinishPicture'; 

export const MillionareFinish = () => {
    const questionsQuantityCorrect = localStorage.getItem('questionsQuantityCorrect');
    const finish = getFinishPicture(questionsQuantityCorrect);

    console.log('finish:', finish);

    return(
        <div className = 'finish'>
            <div className = 'finishTitle'>  </div>
            <div className = 'finishImg'></div>
        </div>
    )
}