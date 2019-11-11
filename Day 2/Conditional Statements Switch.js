'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let lazetter;
    // Write your code here
    switch (s[0]) {
        case ('a' || 'e' || 'i' || 'o' || 'u'):
            lazetter = 'A';
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            lazetter = 'B';
            break;
        case ('h' || 'k' || 'j' || 'l' || 'm'):
            lazetter = 'C';
            break;
        case ('n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z'):
            lazetter = 'D';


    }
    return lazetter;
}

