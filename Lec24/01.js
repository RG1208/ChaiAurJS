// IIFE 
// Immediately invoked Function Expressions

// global scope ke pollution se poblem hoti hai that's why to immediately invoke a function we use iife to remove that pollution 
// pollution can be caused by variables
//  ()()

(function chai() {
    // named IIFE
    console.log("Chai");
})();

// un-named IIFE
(() => { console.log("Chai Two"); })();
((name) => { console.log(`Chai Two with ${name}`); })("Rachit")

// dont forget to terminate one IIFE before using another one