const unusedLocalVars = (a) => {
    let b = 100;
    return a * 1000;
};

const redundantParentheses = (a, y) => {
    let x = (y / 2 + 1); //Compliant even if those parenthesis are useless for the compiler

    if (a && ((x+y > 0))) {  // Noncompliant
      a = x + y;
    }
    
    return ((x + 1));  // Noncompliant
};

module.exports = { unusedLocalVars, redundantParentheses };
