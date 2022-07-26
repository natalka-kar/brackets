module.exports = function check(str, bracketsConfig) {
  let finishArr = [];
  let newStr = str.split('');
  for (let n = 0; n < bracketsConfig.length; n++) {
    for (let i = 0; i < newStr.length; i++) {
      if ((newStr[i - 1] === bracketsConfig[n][0] && newStr[i] === bracketsConfig[n][1])) {
        newStr.splice(i - 1, 2);
        i = 0;
        n = 0;
      }
    }
  }
  if (newStr.length === 0) {
    return true;
  } else {
    return false;
  }
}