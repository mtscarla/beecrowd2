var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var notaA = parseDouble(lines.shift())
var notaB = parseDouble(lines.shift())
var notaC = parseDouble(lines.shift())

var media = (notaA*2 + notaB*3 + notaC*5)/10
console.log(`MEDIA = ${media.(2)}`)