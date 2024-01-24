/**
 * only Number validation
 * @param {string} value
 * @returns {boolean}
 */

export const onlyNumber = (value) => {
  const regex = /^[0-9]*$/;
  return regex.test(value);
};

/**
 * regex validation only float number must be start with 0 no decimal number accept before .
 * @param {string} value
 * @returns {boolean}
 */

export const onlyFloatNumber = (value) => {
  const regex = /^0\.[0-9]*$/;
  return regex.test(value);
};

/**
 * regex validation both float and integer number
 * @param {string} value
 * @returns {boolean}
 * @example
 */

export const floatAndIntegerNumber = (value) => {
  const regex = /^(0|[1-9]\d*)(\.)?(\d+)?$/;
  return regex.test(value);
};
