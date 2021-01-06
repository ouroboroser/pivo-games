import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosArrowForward } from 'react-icons/all';
import './MillionareSelect.scss';
import { Loading } from '../../components';
import { Millionaire } from '../../services/Games';

export const MillionareSelect = () => {
  const [topic, setTopic] = useState<string>('');
  const [selectTopic, setSelectTopic] = useState<boolean>(false);

  const [level, setLevel] = useState<string>('');
  const [selectLevel, setSelectLevel] = useState<boolean>(false);

  const [questions, setQuestions] = useState<number>(0);
  const [selectQuestions, setSelectQuestions] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [getQuestions, setGetQuestions] = useState<any>([]);

  const [startMillionare, setStartMillionare] = useState<boolean>(false);

  const handlerSelectTopic = (e: any) => {
    setTopic(e);
    setSelectTopic(true);
  };

  const handlerSelectLevel = (e: any) => {
    setLevel(e);
    setSelectLevel(true);
  };

  const handlerSelectQuestions = (e: any) => {
    setQuestions(e);
    setSelectQuestions(true);
    localStorage.setItem('questionsQuantity', e);
  };

  const millionaire = new Millionaire('millionare');

  const startGame = async () => {
    setLoading(true);
    const response = await millionaire.selectOption(topic, level, questions);
    console.log('result', response);
    if (response) {
      setLoading(false);
      const gameMillionare = response.data.game.questions || '{}';
      localStorage.setItem('gameMillionare', JSON.stringify(gameMillionare));
      setStartMillionare(true);
    }
  };

  if (startMillionare) {
    return <Redirect to='/millionaire-process/0' />;
  }

  return (
    <div className='selectWrapper'>
      <div className='select'>
        <div className='selectTopicWrapper'>
          <p className='selectTopicTitle'>
            {' '}
            Select any topic of you want and start game{' '}
          </p>
          <DropdownButton
            title={<IoIosArrowForward size={35} color='lightgray' />}
            onSelect={handlerSelectTopic}
            id='selectTopicBtn'
          >
            <div className='selectTopic'>
              <Dropdown.Item className='selectTopicItem' eventKey='science'>
                {' '}
                Science{' '}
              </Dropdown.Item>
              <Dropdown.Item className='selectTopicItem' eventKey='literature'>
                {' '}
                Literature{' '}
              </Dropdown.Item>
              <Dropdown.Divider />
            </div>
          </DropdownButton>
        </div>
        {selectTopic && (
          <p className='selectTopicResult'>You selected {topic} </p>
        )}

        <div className='selectLevelWrapper'>
          <p className='selectLevelTitle'>
            {' '}
            Select level of game and test your strength{' '}
          </p>
          <DropdownButton
            title={<IoIosArrowForward size={35} color='lightgray' />}
            onSelect={handlerSelectLevel}
            id='selectTopicBtn'
          >
            <div className='selectTopic'>
              <Dropdown.Item className='selectTopicItem' eventKey='EASY'>
                {' '}
                Easy{' '}
              </Dropdown.Item>
              <Dropdown.Item className='selectTopicItem' eventKey='MEDIUM'>
                {' '}
                Medium{' '}
              </Dropdown.Item>
              <Dropdown.Item className='selectTopicItem' eventKey='HARD'>
                {' '}
                Hard{' '}
              </Dropdown.Item>
              <Dropdown.Divider />
            </div>
          </DropdownButton>
        </div>
        {selectLevel && (
          <p className='selectTopicResult'>You selected {level} </p>
        )}

        <div className='selectTopicWrapper'>
          <p className='selectTopicTitle'>
            {' '}
            Select number of questions and enjoy game{' '}
          </p>
          <DropdownButton
            title={<IoIosArrowForward size={35} color='lightgray' />}
            onSelect={handlerSelectQuestions}
            id='selectTopicBtn'
          >
            <div className='selectTopic'>
              <Dropdown.Item className='selectTopicItem' eventKey='10'>
                {' '}
                10{' '}
              </Dropdown.Item>
              <Dropdown.Item className='selectTopicItem' eventKey='20'>
                {' '}
                20{' '}
              </Dropdown.Item>
              <Dropdown.Item className='selectTopicItem' eventKey='30'>
                {' '}
                30{' '}
              </Dropdown.Item>
              <Dropdown.Divider />
            </div>
          </DropdownButton>
        </div>
        {selectQuestions && (
          <p className='selectTopicResult'>You selected {questions} </p>
        )}
        <button id='startGame' onClick={() => startGame()}>
          {' '}
          Start game{' '}
        </button>
        {loading ? <Loading /> : ''}
      </div>
    </div>
  );
};
