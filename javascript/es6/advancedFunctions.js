//Closures -- in js child scope always has access to parent scope. Ie, a function ran, it execuited, it will never run again. But it will remember that there are references to variables. 

//Note: parents don't have access to parent scope.
//note: functions are their own universe between their parentheses

const first = () => {
    const greet = 'HI';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Currying -- process of taking a f() with multiple arguments, to an f() with arguments one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(4)(5); //returns 20

//example use
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy2 = curriedMultiply(2);

multiplyBy2(10); //returns 20
multiplyBy2(40); //returns 80

//Compose -- take two f() and put them together, where the result of the function is the 
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1
compose(sum, sum)(5); //returns 7, but why?

    //here's why:
        //Based on the function above.
        f(g(a));
        a = 5
        g(a) = sum +1 = 6
        f(g(a)) = sum +1(sum +1(5)) = 7

//Avoid side effects & functional purity
    //lack of unwanted actions resulting from the function
        var a =1
        function b(){
            a=2
        } //changes value of "a"
    
    //functional purity (DETERMINISTIC FUNCTION)- side effects are gone and always returning something
        //deterministric f()) - whatever parameters go into the function, it always returns the same value
