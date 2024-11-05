'use strict';

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const value = persons[name];
    const age = value.died - value.born;
    result[name] = age;
  }
  return result;
};

module.exports = { ages };
