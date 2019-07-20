const { unusedLocalVars, redundantParentheses } = require('../src/smell');

test('Unused Local Vars', () => {
    expect(unusedLocalVars(1)).toBe(1000);
});

test('Redundant Parentheses', () => {
    expect(redundantParentheses(1,2)).toBe(3);
});
