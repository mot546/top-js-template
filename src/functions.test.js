import {
    capitalize,
    reverseString
} from './functions.js';

test('Capitalize first Letter', ()=>{
    const input = ['word', 'example'];
    const expected = ['Word', 'Example'];
    input.forEach((actual, index)=>{
        expect(capitalize(actual)).toBe(expected[index]);
    });
});
test('reverseString exists',()=>{
    expect(reverseString).toBeDefined();
});
