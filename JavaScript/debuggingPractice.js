//Introduction & practice of debugging code

const flattened = [[0,1],[2,3],[4,5]].reduce(
    (a, b) => a.concat(b), []);

//read through f() to identify what it does. 
    //assigns a variable
    //there's a nested array
    //wants to 'flatten'?
    //rename to make it easier
const flattened = [[0,1],[2,3],[4,5]].reduce(
    (accumulator, array) => {
        console.log('array', array);
        console.log('accumulator', accumulator);
        return accumulator.concat(array)
}, []);
//prints array (2) [0, 1]
    //accumulator []
    //array (2) [2, 3]
    //accumulator (2) [0, 1]
    //array (2) [4, 5]
    //accumulator (4) [0, 1, 2, 3]
//3 loops are seen
    //1st loop: array is 0,1 & accumulator is [] (empty array to accumulate into)
    //2nd loop: array is 2,3 & acc is 0,1 bc after first loop 0,1 is added to acc
    //3rd loop: array 4,5 & acc is attaching last array to acc 0,1,2,3
//const flattened flattens array
    // from [[0,1],[2,3],[4,5]]
    // to [0, 1, 2, 3, 4, 5]

//Debugger statement

const flattened = [[0,1],[2,3],[4,5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array)
}, []);
//debugger stops the loop in the console and walks through each action of the loop. Step-over command (found in the console) walks through steps of loop one-by-one