import Calculator from './../src/js/Calculator.js'

describe('Calculator', () => {

  test('It should return 3 as the date', () => {
    const date1 = new Calculator(3);
    expect(date1.date).toEqual(3);
  });
});