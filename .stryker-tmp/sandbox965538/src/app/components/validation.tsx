// @ts-nocheck
'use strict';

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

export const nameIsValid = (name: string) => {
  if (stryMutAct_9fa48(140)) {
    {}
  } else {
    stryCov_9fa48(140);
    return /^(?=[a-zA-Z0-9._]{4,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(name);
  }
};
export const emailIsValid = (email: string) => {
  if (stryMutAct_9fa48(141)) {
    {}
  } else {
    stryCov_9fa48(141);
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
};
export const passwordIsValid = (password: string) => {
  if (stryMutAct_9fa48(142)) {
    {}
  } else {
    stryCov_9fa48(142);
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  }
};