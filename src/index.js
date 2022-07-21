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
const obj = {
    '10': ".",
    '11': "-",
  }


function decode(expr) {
    let solution = '';
    for (let i = 0; i < expr.length; i+=10) {
        let str = (Number(expr.substr(i,10))).toString();
        if (isNaN(Number(expr.substr(i,10)))) {
            solution = solution + ' ';
            continue;
          }
        let simLetter = '';
        for (let j = 0; j < str.length; j+=2) {
            simLetter = simLetter + obj[str.slice(j, j+2)];
        }
        solution = solution + MORSE_TABLE[simLetter];

    }
    return solution;
}

module.exports = {
    decode
}