const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
}); 

test('subtração 2 - 3 igual a -1', () => { 
    expect(math.subtract(2, 3)).toBe(-1); 
}); 

test('multiplicação 2 * 3 igual a 6', () => { 
    expect(math.multiply(2, 3)).toBe(6); 
}); 

test('dividir 3 / 3 igual a 1', () => { 
    expect(math.divide(3, 3)).toBe(1); 
}); 

test('soma 25 + 83 igual a 108', () => { 
    expect(math.add(25, 83)).toBe(108); 
}); 
