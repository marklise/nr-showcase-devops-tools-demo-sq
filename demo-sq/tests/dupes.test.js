const { eightySeven, fourScoreAndSeven } = require('../src/dupes');

test('eightySeven', () => {
    expect(eightySeven()).toBe(87);
});

test('fourScoreAndSeven', () => {
    expect(fourScoreAndSeven()).toBe(87);
});
