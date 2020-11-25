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

import React from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
describe(stryMutAct_9fa48(82) ? "" : (stryCov_9fa48(82), 'login'), () => {
  if (stryMutAct_9fa48(83)) {
    {}
  } else {
    stryCov_9fa48(83);
    it(stryMutAct_9fa48(84) ? "" : (stryCov_9fa48(84), 'correct login test'), async () => {
      if (stryMutAct_9fa48(85)) {
        {}
      } else {
        stryCov_9fa48(85);
        const correctUser = stryMutAct_9fa48(86) ? {} : (stryCov_9fa48(86), {
          username: stryMutAct_9fa48(87) ? "" : (stryCov_9fa48(87), 'testuser10'),
          password: stryMutAct_9fa48(88) ? "" : (stryCov_9fa48(88), 'testuser10')
        });
        render(<LoginForm />);
        screen.debug();
        const input_username = screen.getByPlaceholderText(/name/i);
        const input_password = screen.getByPlaceholderText(/password/i);
        fireEvent.change(input_username, stryMutAct_9fa48(89) ? {} : (stryCov_9fa48(89), {
          target: stryMutAct_9fa48(90) ? {} : (stryCov_9fa48(90), {
            value: correctUser.username
          })
        }));
        fireEvent.change(input_password, stryMutAct_9fa48(91) ? {} : (stryCov_9fa48(91), {
          target: stryMutAct_9fa48(92) ? {} : (stryCov_9fa48(92), {
            value: correctUser.password
          })
        }));
        await waitFor(() => {
          if (stryMutAct_9fa48(93)) {
            {}
          } else {
            stryCov_9fa48(93);
            fireEvent(screen.getByText(/Sign in/i), new MouseEvent(stryMutAct_9fa48(94) ? "" : (stryCov_9fa48(94), 'click'), stryMutAct_9fa48(95) ? {} : (stryCov_9fa48(95), {
              bubbles: stryMutAct_9fa48(96) ? false : (stryCov_9fa48(96), true),
              cancelable: stryMutAct_9fa48(97) ? false : (stryCov_9fa48(97), true)
            })));
          }
        });
        await waitFor(stryMutAct_9fa48(98) ? () => undefined : (stryCov_9fa48(98), () => expect(screen.queryByText(stryMutAct_9fa48(99) ? "" : (stryCov_9fa48(99), 'Username or password cannot be empty string'))).toBe(null)));
      }
    });
    it(stryMutAct_9fa48(100) ? "" : (stryCov_9fa48(100), 'incorrect login test'), async () => {
      if (stryMutAct_9fa48(101)) {
        {}
      } else {
        stryCov_9fa48(101);
        const incorrectUser = stryMutAct_9fa48(102) ? {} : (stryCov_9fa48(102), {
          username: stryMutAct_9fa48(103) ? "Stryker was here!" : (stryCov_9fa48(103), ''),
          password: stryMutAct_9fa48(104) ? "Stryker was here!" : (stryCov_9fa48(104), '')
        });
        render(<LoginForm />);
        screen.debug();
        const input_username = screen.getByPlaceholderText(/name/i);
        const input_password = screen.getByPlaceholderText(/password/i);
        fireEvent.change(input_username, stryMutAct_9fa48(105) ? {} : (stryCov_9fa48(105), {
          target: stryMutAct_9fa48(106) ? {} : (stryCov_9fa48(106), {
            value: incorrectUser.username
          })
        }));
        fireEvent.change(input_password, stryMutAct_9fa48(107) ? {} : (stryCov_9fa48(107), {
          target: stryMutAct_9fa48(108) ? {} : (stryCov_9fa48(108), {
            value: incorrectUser.password
          })
        }));
        await waitFor(() => {
          if (stryMutAct_9fa48(109)) {
            {}
          } else {
            stryCov_9fa48(109);
            fireEvent(screen.getByText(/Sign in/i), new MouseEvent(stryMutAct_9fa48(110) ? "" : (stryCov_9fa48(110), 'click'), stryMutAct_9fa48(111) ? {} : (stryCov_9fa48(111), {
              bubbles: stryMutAct_9fa48(112) ? false : (stryCov_9fa48(112), true),
              cancelable: stryMutAct_9fa48(113) ? false : (stryCov_9fa48(113), true)
            })));
          }
        });
        await waitFor(stryMutAct_9fa48(114) ? () => undefined : (stryCov_9fa48(114), () => expect(screen.queryByText(stryMutAct_9fa48(115) ? "" : (stryCov_9fa48(115), 'Username or password cannot be empty string'))).toBeTruthy()));
      }
    });
  }
});