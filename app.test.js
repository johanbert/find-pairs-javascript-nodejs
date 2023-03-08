const { findPairs } = require('./utils');
const fs = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// finds pairs of integers from a list that sum to a given value
describe('Function findPairs', () => {
    const arr = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const targetSum = 12
    const filePath = 'find-pairs2.txt'

    test('When correct parameters are sent, must return an array with the pairs that add up to the total', () => {
        const response = findPairs(arr, targetSum)
        expect(response).toEqual(['12,0', '16,-4', '7,5']);
    });
    test('When no pair of numbers is found that results in the sum, must return a controlled error', () => {
        try {
            const targetSumImpossible = 13
            findPairs(arr, targetSumImpossible)
        } catch (e) {
            expect(e.message).toBe('Not founded pairs to get target sum');
        }
    });
    test('When 0 parameters are sent, must return a controlled error', () => {
        try {
            findPairs()
        } catch (e) {
            expect(e.message).toBe('1 or 2 parameters left, both are required');
        }
    });
    test('When only 1 parameter is sent, must return a controlled error', () => {
        try {
            findPairs(arr)
        } catch (e) {
            expect(e.message).toBe('1 or 2 parameters left, both are required');
        }
    });
    test('When parameters are sent by command line, must it works', async () => {
        const { stdout } = await exec(`node app.js ${arr.join(",").toString()} ${targetSum}`);
        expect(stdout).toContain('12,0');
        expect(stdout).toContain('16,-4');
        expect(stdout).toContain('7,5');
    })
    test('When only 1 parameter is sent by command line, must return a controlled error', async () => {
        try {
            const { stdout } = await exec(`node app.js ${arr.join(",").toString()}`);
            console.log(1111, stdout);
        } catch (e) {
            expect(e.message).toContain('1 or 2 parameters left, both are required');
        }
    })
    test('When is execute it using a correct file, must it works', async () => {
        
        await fs.writeFile(filePath, `${arr.join(",").toString()} ${targetSum}`, 'utf8');
        const { stdout } = await exec(`node app.js ${filePath}`);
        expect(stdout).toContain('12,0');
        expect(stdout).toContain('16,-4');
        expect(stdout).toContain('7,5');
    })
    test('When is execute it using a file path wrong, must return a controlled error', async () => {
        try {
            await exec(`node app.js ${filePath}t`);
        } catch (e) {
            expect(e.message).toContain('File doesnt exists');
        }
    })
});