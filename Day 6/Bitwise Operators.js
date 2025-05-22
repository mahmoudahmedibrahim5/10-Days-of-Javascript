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
const getMaxLessThanK = function (n, k){
    let result = 0;
    for(let i = 1; i <= n; i++)
    {
        for(let j = i + 1; j <= n; j++)
        {
            if(((i & j) > result) && ((i & j) < k))
                result = i & j;
        }
    }
    return result;
} 


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}