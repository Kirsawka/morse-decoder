const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    const arr = [];
    let str = "";

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }

    arr.forEach((item) => {

        item = item.replace(/00/g, "");
        item = item.replace(/10/g, ".");
        item = item.replace(/11/g, "-");

        if (MORSE_TABLE[item] === undefined) {
            str += " ";
        } else {
            str += MORSE_TABLE[item];
        }
    });
    return str;
}

module.exports = {
    decode
}