import {capitalize,reverseString,calculator,caeserCipher,analyzeArray} from './practice';

test('capitalizes lowercase string',()=>{
    expect(capitalize('babou is my cat')).toBe('Babou is my cat');
    expect(capitalize('I LIKE APPLE STRUDEL')).toBe('I LIKE APPLE STRUDEL');
    expect(capitalize('This string starts uppercase')).toBe('This string starts uppercase');
});

test('reverses a string',()=>{
    expect(reverseString('this string is lowercase')).toBe('esacrewol si gnirts siht');
    expect(reverseString('And this starts uppercase')).toBe('esacreppu strats siht dnA');
    expect(reverseString('adding a number 3')).toBe('3 rebmun a gnidda');
});

test('calculator functions',()=>{
    expect(calculator.add(3,0.5)).toBe(3.5);
    expect(calculator.add(-4,1)).toBe(-3);
    expect(calculator.subtract(8,4.5)).toBe(3.5);
    expect(calculator.subtract(-3,2)).toBe(-5);
    expect(calculator.multiply(-3,4)).toBe(-12);
    expect(calculator.multiply(-2,-4)).toBe(8);
    expect(calculator.divide(20,8)).toBe(2.5);
    expect(calculator.divide(-15,3)).toBe(-5);
});

test('caeser cipher testing',()=>{
    expect(caeserCipher('abcd',5)).toBe('fghi');
    expect(caeserCipher('mnopq',25)).toBe('lmnop');
});

test('analyzing an array',()=>{
    expect(analyzeArray([2,4,5,1,3])).toStrictEqual({average:3,min:1,max:5,length:5});
    expect(analyzeArray([-1,5,2,4])).toStrictEqual({average:2.5,min:-1,max:5,length:4});
});