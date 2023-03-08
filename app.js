/* eslint-disable indent */
const { readParameters, findPairs } = require('./utils');




const [arr, targetSum] = readParameters();
findPairs(arr, targetSum)
