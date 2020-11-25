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
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes';
export const Routing = () => {
  if (stryMutAct_9fa48(143)) {
    {}
  } else {
    stryCov_9fa48(143);
    const isLogin = Boolean(localStorage.getItem(stryMutAct_9fa48(144) ? "" : (stryCov_9fa48(144), 'user'))); //const isLogin = true;

    console.log(stryMutAct_9fa48(145) ? "" : (stryCov_9fa48(145), 'Login: '), isLogin);
    return <div>
      <Switch>
        {routes.map((route, i) => {
          if (stryMutAct_9fa48(146)) {
            {}
          } else {
            stryCov_9fa48(146);

            if (stryMutAct_9fa48(148) ? false : stryMutAct_9fa48(147) ? true : (stryCov_9fa48(147, 148), isLogin)) {
              if (stryMutAct_9fa48(149)) {
                {}
              } else {
                stryCov_9fa48(149);
                return <Route key={i} exact={route.exact} path={route.path} component={route.component} />;
              }
            } else {
              if (stryMutAct_9fa48(150)) {
                {}
              } else {
                stryCov_9fa48(150);

                if (stryMutAct_9fa48(153) ? route.auth !== false : stryMutAct_9fa48(152) ? false : stryMutAct_9fa48(151) ? true : (stryCov_9fa48(151, 152, 153), route.auth === (stryMutAct_9fa48(154) ? true : (stryCov_9fa48(154), false)))) {
                  if (stryMutAct_9fa48(155)) {
                    {}
                  } else {
                    stryCov_9fa48(155);
                    return <Route key={i} exact={route.exact} path={route.path} component={route.component} />;
                  }
                } else {
                  if (stryMutAct_9fa48(156)) {
                    {}
                  } else {
                    stryCov_9fa48(156);
                    return <Redirect to='/login' />;
                  }
                }
              }
            }
          }
        })}
      </Switch>
    </div>;
  }
};