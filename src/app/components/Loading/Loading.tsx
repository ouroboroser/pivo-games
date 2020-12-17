import React from 'react';

export const Loading = () => {
    return (
        <div>
            <p> We need time to generate your game ... </p>
            <img src={`${process.env.PUBLIC_URL}/img/loading.gif`} alt='login' width = '80' />
        </div>
    )
}