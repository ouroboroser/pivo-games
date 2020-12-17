import axios from 'axios';
import {useState} from 'react';

const apiUrlGame = 'http://35.233.79.129/game';

export type Game = {
  selectOptions: (x: string, y: string, z: number) => void;
};

export const gameMillionare: Game = {
  selectOptions: (topic: string, level: string, questions: number) => {
    axios.get(`${apiUrlGame}/millionaire?topic=${topic}&diffculty=${level}&questions=${questions}`)
      .then((response) => {
        console.log(response);
        //setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  },
};
