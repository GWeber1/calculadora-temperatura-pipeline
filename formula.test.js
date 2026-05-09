const formula = require('./formula');

test('Deve converter 35 graus Celsius para Fahrenheit', () => { //teste correto
    expect(formula(35)).toBe(95);
})

test('Deve converter 4 graus Celsius para Fahrenheit, mas em vez de 39,2 irá esperar 40', () => { //teste errado
    expect(formula(4)).toBe(40)
})