function name(name) {
    console.log("hello " + name + " welcome to the tutorial");
    console.log("hello " + name + " jai shree ram");
    console.log("hello " + name + " radhe krishna");
}
name("aditya")
name("sachin")

function sum(a, b) {
    console.log("The sum of " + a + " and " + b + " is: " + (a + b));
    return a + b;
}
result  = sum(5, 10);
console.log("The result of the sum is: " + result);


const func = (x)=>{
    console.log("This is a function with an arrow syntax");
    return x * 2;
}
console.log(func(22));