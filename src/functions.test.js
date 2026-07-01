import {
    capitalize,
    reverseString
} from './functions.js';

// capitalize
test('Capitalize first Letter', ()=>{
    const input = ['word', 'example', ' word', '  example'];
    const expected = ['Word', 'Example','Word', 'Example'];
    input.forEach((actual, index)=>{
        expect(capitalize(actual)).toBe(expected[index]);
    });
});
test('Works with Non Alphabet of First String', ()=>{
    expect(capitalize("*(word")).toBe('Word');
});

//  reverseString
test('reverseString working',()=>{
    const input = ['word', 'example'];
    const expected = ['drow', 'elpmaxe'];
    input.forEach((actual, index)=>{
        expect(reverseString(actual)).toBe(expected[index]);
    });
});