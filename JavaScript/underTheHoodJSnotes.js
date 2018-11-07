//how js works

//Program does two things:
    //allocates memory
    //parse and execute script

//browser engine - translates source code to machine - has two parts:
    //memory heap: allocating memory

const a = 1
const b = 10
const c = 100
        //memory leak: all memory is limited. Leaks happen when there is unused memory laid around. ex) what if var 'a' was never used again and is sitting around using memory.

    //call stack: reads and executes script: first in, last out
        //literally creates a stack of read js commands to execute

console.log('1');
console.log('2');
console.log('3'); 
        //these are commands that are put into the call stack

const one = () => {
    const two = () => {
        console.log('4');

    }
    two();
}   

//demonstration of call stack vv
console.log('4') //run 1st, then remove
two()//remove after console.log
one()//remove after two()
//CALL_STACK

//Javascript is a single threaded* language that can be non-blocking**
    //*single threaded means there is only one call stack and it is 'first in, last out' meaning it can only do one thing at a time.
    //**asynch executes lines of code non synchronously
    console.log('1');
    setTimeout(()=> {
        console.log('2');
    }, 2000)// 2 secs = 2000
    console.log('3'); //prints 1,3,2

//Synchronous programming: lines of code get executed line by line
    //ex of stack overflow (recursion)
        function foo() {
            foo()
        }
        foo();
        //recursiom: a function that runs itself over and over

