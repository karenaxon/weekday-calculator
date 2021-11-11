import Calculator from './../src/js/Calculator.js'

describe('Calculator', () => {
  let date1;
  
  beforeEach(() => {
    date1 = new Calculator("3");
  });

  test('It should return true after invoking the getDay function', () => {
    expect(date1.day).toBeTruthy();
  });
});