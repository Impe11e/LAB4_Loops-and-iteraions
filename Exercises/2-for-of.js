'use strict';

const sum = (...args) => {
  let res = 0;
  for (const i of args) {
    res += i;
  }
  return res;
};

module.exports = { sum };
