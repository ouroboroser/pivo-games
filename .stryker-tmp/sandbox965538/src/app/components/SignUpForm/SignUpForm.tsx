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
import { nameIsValid, emailIsValid, passwordIsValid } from '../validation';
const apiUrl = stryMutAct_9fa48(38) ? "" : (stryCov_9fa48(38), 'http://35.233.79.129');
export const SignUpForm = () => {
  if (stryMutAct_9fa48(39)) {
    {}
  } else {
    stryCov_9fa48(39);
    const [username, setUsername] = useState<string>(stryMutAct_9fa48(40) ? "Stryker was here!" : (stryCov_9fa48(40), ''));
    const [email, setEmail] = useState<string>(stryMutAct_9fa48(41) ? "Stryker was here!" : (stryCov_9fa48(41), ''));
    const [password, setPassword] = useState<string>(stryMutAct_9fa48(42) ? "Stryker was here!" : (stryCov_9fa48(42), ''));
    const [confirmPassword, setConfirmPassword] = useState<string>(stryMutAct_9fa48(43) ? "Stryker was here!" : (stryCov_9fa48(43), ''));
    const [error, setError] = useState<boolean>(stryMutAct_9fa48(44) ? true : (stryCov_9fa48(44), false));

    const signUpHandler = (username: string, email: string, password: string, confirmPassword: string) => {
      if (stryMutAct_9fa48(45)) {
        {}
      } else {
        stryCov_9fa48(45);
        console.log(stryMutAct_9fa48(46) ? "" : (stryCov_9fa48(46), 'name:'), username, stryMutAct_9fa48(47) ? "" : (stryCov_9fa48(47), 'email:'), email, stryMutAct_9fa48(48) ? "" : (stryCov_9fa48(48), 'password:'), password, stryMutAct_9fa48(49) ? "" : (stryCov_9fa48(49), 'confirmPassword:'), confirmPassword);
        const checkedUsername = nameIsValid(username);
        const checkedEmail = emailIsValid(email);
        const checkedPassword = passwordIsValid(password);

        if (stryMutAct_9fa48(52) ? ((stryMutAct_9fa48(58) ? !checkedUsername && !checkedEmail : stryMutAct_9fa48(57) ? false : stryMutAct_9fa48(56) ? true : (stryCov_9fa48(56, 57, 58), (stryMutAct_9fa48(59) ? checkedUsername : (stryCov_9fa48(59), !checkedUsername)) || (stryMutAct_9fa48(60) ? checkedEmail : (stryCov_9fa48(60), !checkedEmail)))) || (stryMutAct_9fa48(61) ? checkedPassword : (stryCov_9fa48(61), !checkedPassword))) && password !== confirmPassword : stryMutAct_9fa48(51) ? false : stryMutAct_9fa48(50) ? true : (stryCov_9fa48(50, 51, 52), (stryMutAct_9fa48(55) ? ((stryMutAct_9fa48(59) ? checkedUsername : (stryCov_9fa48(59), !checkedUsername)) || (stryMutAct_9fa48(60) ? checkedEmail : (stryCov_9fa48(60), !checkedEmail))) && !checkedPassword : stryMutAct_9fa48(54) ? false : stryMutAct_9fa48(53) ? true : (stryCov_9fa48(53, 54, 55), (stryMutAct_9fa48(58) ? !checkedUsername && !checkedEmail : stryMutAct_9fa48(57) ? false : stryMutAct_9fa48(56) ? true : (stryCov_9fa48(56, 57, 58), (stryMutAct_9fa48(59) ? checkedUsername : (stryCov_9fa48(59), !checkedUsername)) || (stryMutAct_9fa48(60) ? checkedEmail : (stryCov_9fa48(60), !checkedEmail)))) || (stryMutAct_9fa48(61) ? checkedPassword : (stryCov_9fa48(61), !checkedPassword)))) || (stryMutAct_9fa48(64) ? password === confirmPassword : stryMutAct_9fa48(63) ? false : stryMutAct_9fa48(62) ? true : (stryCov_9fa48(62, 63, 64), password !== confirmPassword)))) {
          if (stryMutAct_9fa48(65)) {
            {}
          } else {
            stryCov_9fa48(65);
            setError(stryMutAct_9fa48(66) ? false : (stryCov_9fa48(66), true));
          }
        } else {
          if (stryMutAct_9fa48(67)) {
            {}
          } else {
            stryCov_9fa48(67);
            axios.post(stryMutAct_9fa48(68) ? apiUrl - '/user' : (stryCov_9fa48(68), apiUrl + (stryMutAct_9fa48(69) ? "" : (stryCov_9fa48(69), '/user'))), stryMutAct_9fa48(70) ? {} : (stryCov_9fa48(70), {
              username,
              password,
              email,
              role: stryMutAct_9fa48(71) ? "" : (stryCov_9fa48(71), 'user')
            })).then(response => {
              if (stryMutAct_9fa48(72)) {
                {}
              } else {
                stryCov_9fa48(72);
                console.log(response);
              }
            }).catch(error => {
              if (stryMutAct_9fa48(73)) {
                {}
              } else {
                stryCov_9fa48(73);
                console.log(error);
              }
            });
          }
        }
      }
    };

    return <div>
      Sing up form
      <div>
        <p> <input placeholder='Name' value={username} onChange={stryMutAct_9fa48(74) ? () => undefined : (stryCov_9fa48(74), e => setUsername(e.target.value))} /> </p>
        <p> <input placeholder='Email' value={email} onChange={stryMutAct_9fa48(75) ? () => undefined : (stryCov_9fa48(75), e => setEmail(e.target.value))} /> </p>
        <p> <input placeholder='Password' value={password} onChange={stryMutAct_9fa48(76) ? () => undefined : (stryCov_9fa48(76), e => setPassword(e.target.value))} /> </p>
        <p> <input placeholder='Confirm' value={confirmPassword} onChange={stryMutAct_9fa48(77) ? () => undefined : (stryCov_9fa48(77), e => setConfirmPassword(e.target.value))} /> </p>
        <button onClick={stryMutAct_9fa48(78) ? () => undefined : (stryCov_9fa48(78), () => signUpHandler(username, email, password, confirmPassword))}> Sign up </button>
        {stryMutAct_9fa48(81) ? error || <p> Data is not correct </p> : stryMutAct_9fa48(80) ? false : stryMutAct_9fa48(79) ? true : (stryCov_9fa48(79, 80, 81), error && <p> Data is not correct </p>)}
      </div>
    </div>;
  }
};