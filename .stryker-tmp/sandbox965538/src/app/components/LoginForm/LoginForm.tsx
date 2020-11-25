// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});

  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = Number(g.process.env.__STRYKER_ACTIVE_MUTANT__);
  }

  function retrieveNS() {
    return ns;
  }

  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}

stryNS_9fa48();

function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });

  function cover() {
    var c = cov.static;

    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }

    var a = arguments;

    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }

  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}

function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();

  function isActive(id) {
    return ns.activeMutant === id;
  }

  stryMutAct_9fa48 = isActive;
  return isActive(id);
}

import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = stryMutAct_9fa48(1) ? "" : (stryCov_9fa48(1), 'http://35.233.79.129/auth');
export const LoginForm = () => {
  if (stryMutAct_9fa48(2)) {
    {}
  } else {
    stryCov_9fa48(2);
    const initValue = stryMutAct_9fa48(3) ? {} : (stryCov_9fa48(3), {
      username: stryMutAct_9fa48(4) ? "Stryker was here!" : (stryCov_9fa48(4), ''),
      password: stryMutAct_9fa48(5) ? "Stryker was here!" : (stryCov_9fa48(5), ''),
      error: stryMutAct_9fa48(6) ? true : (stryCov_9fa48(6), false)
    });
    const [username, setUsername] = useState<string>(initValue.username);
    const [password, setPassword] = useState<string>(initValue.password);
    const [error, setError] = useState<boolean>(initValue.error);

    const signUpHandler = (username: string, password: string) => {
      if (stryMutAct_9fa48(7)) {
        {}
      } else {
        stryCov_9fa48(7);
        const data = stryMutAct_9fa48(8) ? {} : (stryCov_9fa48(8), {
          username,
          password
        });
        const checkData = stryMutAct_9fa48(11) ? Object.entries(data).length === 0 : stryMutAct_9fa48(10) ? false : stryMutAct_9fa48(9) ? true : (stryCov_9fa48(9, 10, 11), Object.entries(data).length !== 0);

        if (stryMutAct_9fa48(13) ? false : stryMutAct_9fa48(12) ? true : (stryCov_9fa48(12, 13), checkData)) {
          if (stryMutAct_9fa48(14)) {
            {}
          } else {
            stryCov_9fa48(14);
            const checkUsername = Boolean(stryMutAct_9fa48(17) ? username.length !== 0 : stryMutAct_9fa48(16) ? false : stryMutAct_9fa48(15) ? true : (stryCov_9fa48(15, 16, 17), username.length === 0));
            const checkPassword = Boolean(stryMutAct_9fa48(20) ? password.length !== 0 : stryMutAct_9fa48(19) ? false : stryMutAct_9fa48(18) ? true : (stryCov_9fa48(18, 19, 20), password.length === 0));

            if (stryMutAct_9fa48(23) ? checkUsername && checkPassword : stryMutAct_9fa48(22) ? false : stryMutAct_9fa48(21) ? true : (stryCov_9fa48(21, 22, 23), checkUsername || checkPassword)) {
              if (stryMutAct_9fa48(24)) {
                {}
              } else {
                stryCov_9fa48(24);
                setError(stryMutAct_9fa48(25) ? false : (stryCov_9fa48(25), true));
              }
            } else {
              if (stryMutAct_9fa48(26)) {
                {}
              } else {
                stryCov_9fa48(26);
                axios.post(apiUrl, data).then(response => {
                  if (stryMutAct_9fa48(27)) {
                    {}
                  } else {
                    stryCov_9fa48(27);
                    console.log(response);
                    const token = response.data.token;
                    localStorage.setItem(stryMutAct_9fa48(28) ? "" : (stryCov_9fa48(28), 'user'), JSON.stringify(token));
                  }
                }).catch(error => {
                  if (stryMutAct_9fa48(29)) {
                    {}
                  } else {
                    stryCov_9fa48(29);
                    console.log(error);
                  }
                });
              }
            }
          }
        } else {
          if (stryMutAct_9fa48(30)) {
            {}
          } else {
            stryCov_9fa48(30);
            setError(stryMutAct_9fa48(31) ? false : (stryCov_9fa48(31), true));
          }
        }
      }
    };

    return <div>
      <div>
        <p> <input placeholder='Name' value={username} onChange={stryMutAct_9fa48(32) ? () => undefined : (stryCov_9fa48(32), e => setUsername(e.target.value))} /> </p>
        <p> <input placeholder='Password' value={password} onChange={stryMutAct_9fa48(33) ? () => undefined : (stryCov_9fa48(33), e => setPassword(e.target.value))} /> </p>
        {stryMutAct_9fa48(36) ? error || <p> Username or password cannot be empty string </p> : stryMutAct_9fa48(35) ? false : stryMutAct_9fa48(34) ? true : (stryCov_9fa48(34, 35, 36), error && <p> Username or password cannot be empty string </p>)}
        <button onClick={stryMutAct_9fa48(37) ? () => undefined : (stryCov_9fa48(37), () => signUpHandler(username, password))}> Sign in </button>
      </div>
    </div>;
  }
};