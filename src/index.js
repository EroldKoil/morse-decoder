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

function translate(str) {
 var letter = MORSE_TABLE[str];
 var l="";
    return letter;
}

/*
function decode(expr) {
  var solution = "";
  var string = "";
  var number = "";
    for (var i = 0, j=1 ; i <= expr.length; i++ , j++) {
        if(!(string == "" && expr.charAt(i)=="0") || number.length>0){
            number += expr.charAt(i);
            if(number.length > 1 ){
                if(number == "10"){
                    string += ".";
                }
                else if(number == "11"){
                    string += "-";
                }
                else if(number == "**"){
                    solution += " ";
                    string = "";
                    i += 9;
                    j = 0;
                }
                number = "";
            }
        }
        if(j == 10){
            j = 0;
            solution += translate(string);
            string = "";
        }
    }
    return solution;
}*/

module.exports = {
    decode
}

function decode(expr) {
    var solution = "";
    var string = "";
    var number = "";
    for (var i = 0, j=1 ; i <= expr.length; i++ , j++) {
        if(expr.charAt(i)!="0"){
            number = expr.charAt(i) + expr.charAt(i+1);
            if(number == "10"){
                string += ".";
            }
            else if(number == "11"){
                string += "-";
            }
            else if(number == "**"){
                solution += " ";
                i += 8;
                j = -1;
            }
        }
        i++;
        j++;
        if(j == 10){
            j = 0;
            solution += translate(string);
            string = "";
        }
    }
    return solution;
}