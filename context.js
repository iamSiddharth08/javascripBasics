// That is why it can be called where ever it is necessary
sayHello()

// And will not work here
// sayHell()

// This is the normal function declaration
// This function is scanned and made available by global context
function sayHello(){
    console.log("Hello from the normal function")
}

// This is function to variable
// This variable is scanned and made undefined by the global context
var sayHell = function (){
    console.log("Hello from function to variable")
}

// Thus it will work here i.e. below the declaration
sayHell()