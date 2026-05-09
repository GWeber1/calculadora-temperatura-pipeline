const formula = require('./formula');

test('Deve converter 35 graus Celsius para Fahrenheit', () => { //teste correto
    expect(formula(35)).toBe(95);
})