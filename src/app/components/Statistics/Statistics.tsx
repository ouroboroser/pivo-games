import React from 'react';
import './Statistics.scss';

import {Line} from 'react-chartjs-2';
import { data } from './data';

type StatisticsProps = {
    value: any,
}

export const Statistics: React.FC<StatisticsProps> = ({value}) => {
    return (
        <div className = 'statistics'>
            <Line
          data={value}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
        </div>
    )
}