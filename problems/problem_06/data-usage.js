const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  // put your code here !!
  const arr = raw.split('\n');
  console.log(arr);
  const result = {};
  const user = arr
    .map(line => {
      return line.split('=')[1].split(',')[0];
    })
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(user => {
      return {
        username: user,
        total: 0,
        average: 0
      };
    });
};

module.exports = { dataUsage };
