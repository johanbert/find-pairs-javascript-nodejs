# Mach Eight Test
​

## Task
​
The task is to write a function that finds pairs of integers from a list that
sum to a given value. The function will take as input the list of numbers as
well as the target sum.
​
Sample output is shown below.
```
> app 1,9,5,0,20,-4,12,16,7 12
​
+ 12,0
+ 5,7
+ 16,-4
​
```

## Solution

### How to use

#### By file
Create in the root a file, for example ```find-pairs.txt```
After write inside the parameters.
For example:
```
1,9,5,0,20,-4,12,16,7,10,2 12
```
Then run the next command 
```
node app.js yourFileNameSelected
```

#### By arguments
Run the command writing the 2 parameters by arguments, separated by commas. For example:
```
node app.js 1,9,5,0,20,-4,12,16,7,14,-2 12
```

### Unit Tests
Run ```npm test```