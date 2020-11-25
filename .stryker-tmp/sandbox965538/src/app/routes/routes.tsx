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

import * as view from '../views';
export const routes: Array<any> = stryMutAct_9fa48(157) ? [] : (stryCov_9fa48(157), [stryMutAct_9fa48(158) ? {} : (stryCov_9fa48(158), {
  path: stryMutAct_9fa48(159) ? "" : (stryCov_9fa48(159), '/'),
  auth: stryMutAct_9fa48(160) ? true : (stryCov_9fa48(160), false),
  component: view.Home,
  exact: stryMutAct_9fa48(161) ? false : (stryCov_9fa48(161), true)
}), stryMutAct_9fa48(162) ? {} : (stryCov_9fa48(162), {
  path: stryMutAct_9fa48(163) ? "" : (stryCov_9fa48(163), '/signup'),
  auth: stryMutAct_9fa48(164) ? true : (stryCov_9fa48(164), false),
  component: view.SignUp
}), stryMutAct_9fa48(165) ? {} : (stryCov_9fa48(165), {
  path: stryMutAct_9fa48(166) ? "" : (stryCov_9fa48(166), '/login'),
  auth: stryMutAct_9fa48(167) ? true : (stryCov_9fa48(167), false),
  component: view.Login
}), stryMutAct_9fa48(168) ? {} : (stryCov_9fa48(168), {
  path: stryMutAct_9fa48(169) ? "" : (stryCov_9fa48(169), '/test'),
  auth: stryMutAct_9fa48(170) ? false : (stryCov_9fa48(170), true),
  component: view.Test
})]);