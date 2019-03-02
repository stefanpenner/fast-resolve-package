'use strict';
/*
 * utility to detect if node is respective symlinks or not
 */
module.exports = function(process) {
  return (!!process.env.NODE_PRESERVE_SYMLINKS) || process.execArgv.includes('--preserve-symlinks');
};