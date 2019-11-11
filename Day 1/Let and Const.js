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

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const r = readLine();
    // Print the area of the circle:
    let area = 0.00;
    area = PI * r * r;
    // Print the perimeter of the circle:
    let perimeter = 0.00;
    perimeter = 2 * r * PI;

    //Output
    console.log(area);
    console.log(perimeter);
    try {    