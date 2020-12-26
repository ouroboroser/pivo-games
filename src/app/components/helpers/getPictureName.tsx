export const getPictureName = questionNumber => {
    const result = questionNumber % 3;
    let pictureName = '';

    if(result === 0) pictureName = 'space-discovery.png'
    if(result === 1) pictureName = 'time-managment.png'
    if(result === 2) pictureName = 'working-in-a-laboratory.png'
    
    return pictureName;
}

