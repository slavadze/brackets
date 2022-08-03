module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(element => {
      if (str[i] === element[0] && str[i + 1] === element[1]) {
        str = str.slice(0, i) + str.slice(i + 2, str.length);
        i -= 2;
      }
    });
  }
  return str.length === 0 ? true : false;
}
