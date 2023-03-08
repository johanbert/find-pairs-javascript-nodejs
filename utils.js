function findPairs (arr, targetSum) {
    validateParams(arr, targetSum)
    const pairs = [];
    const hashMap = new Set()
    for (let i = 0; i < arr.length; ++i) {
        const arrCurrentValue = parseInt(arr[i])
        const pair = parseInt(targetSum) - arrCurrentValue

        if (hashMap.has(pair)) {
            pairs.push(`${arrCurrentValue},${pair}`)
            console.log(`${arrCurrentValue},${pair}`)
        }
        hashMap.add(arrCurrentValue)
    }
    if (!pairs.length)
        throw new Error(`Not founded pairs to get target sum`)
    return pairs
}

function validateParams(arr, targetSum){
    if( !arr || !targetSum)
        throw new Error('1 or 2 parameters left, both are required');
}
function readParameters(){
    let args;
    const argsFromCommandLine = !process.argv[2] || !process.argv[3] ? null : [process.argv[2],process.argv[3]];
    const fs = require("fs");

    // When first arg exists and split length is equal to 1, then is a file sent
    if (process.argv[2] && process.argv[2].split(',').length == 1){
        const filePath = process.argv[2];
        if ( !fs.existsSync(filePath) )
            throw new Error(`File doesnt exists`);
        else{
            const fileContent = fs.readFileSync(filePath, "utf-8");
            args = fileContent.split(' ');
        }
    }
    if (argsFromCommandLine)
        args = argsFromCommandLine
    try {
        
        const arr = args[0].split(',')
        const targetSum = args[1]

        return [arr, targetSum]
    }
    catch(e){
        throw new Error('1 or 2 parameters left, both are required');
    }
}
module.exports = {
    findPairs,
    readParameters
}