import { profile } from 'console';
import React from 'react';
import { Link } from 'react-router-dom';
import './Game.scss';

type GameProps = {
    gameName: string,
    linkPath: string,
}

export const Game:React.FC<GameProps> = ({gameName, linkPath}) => {
    return (
        <div className = 'game'>
            <Link to = {linkPath}> {gameName} </Link>
        </div>
    )
}