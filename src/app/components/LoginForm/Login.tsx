import axios from 'axios';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useState, useRef, useMemo } from 'react';

const apiUrl = 'http://35.233.79.129/auth';

export type Auth = {
  login: (x: string, y: string) => void;
};

export const _Login: Auth = {
  login: (x: string, y: string) => {
    console.log('x = ', x, 'y = ', y);
  },
};

export const _LoginWithData: Auth = {
  login: (username: string, password: string) => {
    const data = {
      username,
      password,
    };

    if (username.length === 0 || password.length === 0) {
      console.log('ERROR');
    } else {
      axios
        .post(apiUrl, data)
        .then((response) => {
          console.log(response);
          const token = response.data.token;
          localStorage.setItem('user', JSON.stringify(token));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};

// export const _LoginWS: Auth = {
//   login: (username: string, password: string) => {
//     console.log('username: ', username, 'password: ', password);
//     const [socketUrl, setSocketUrl] = useState(apiUrl);
//     const messageHistory = useRef([]);

//     const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

//     messageHistory.current = useMemo(
//       () => messageHistory.current.concat(lastMessage),
//       [lastMessage]
//     );

//     const handleClickChangeSocketUrl = useCallback(
//       () => setSocketUrl('wss://demos.kaazing.com/echo'),
//       []
//     );

//     const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

//     const connectionStatus = {
//       [ReadyState.CONNECTING]: 'Connecting',
//       [ReadyState.OPEN]: 'Open',
//       [ReadyState.CLOSING]: 'Closing',
//       [ReadyState.CLOSED]: 'Closed',
//       [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
//     }[readyState];
//   },
// };
