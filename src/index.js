const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let size = 10
  let array = []
  for (let i = 0; i < expr.length; i += size) {
    array.push(expr.slice(i, i + size))
  }
let arr = array.map((item) => {
  let res = ''
  if (item === '**********') {
    res += ' '
  } else {
    item = String(+item)
    for (let i = 0; i < item.length; i++) {
      if (i % 2 !== 0) {
        if (item[i] === '1') {
          res += '-'
        } else {
          res += '.'
        }
      }
    }
}
  return res
})
let string = ''
for (let item of arr) {
  if (item === ' ') {
    string += ' '
  } else {
    string += MORSE_TABLE[item]
  }
}
return string
}

module.exports = {
    decode
}