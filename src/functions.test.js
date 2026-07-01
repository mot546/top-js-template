import {
    capitalize,
    reverseString
} from './functions.js';

// capitalize
test('Capitalize first Letter', ()=>{
    const input = ['word', 'example'];
    const expected = ['Word', 'Example'];
    input.forEach((actual, index)=>{
        expect(capitalize(actual)).toBe(expected[index]);
    });
});

//  reverseString
test('reverseString working',()=>{
    const input = ['word', 'example'];
    const expected = ['drow', 'elpmaxe'];
    input.forEach((actual, index)=>{
        expect(reverseString(actual)).toBe(expected[index]);
    });
});