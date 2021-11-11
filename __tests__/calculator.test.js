import Calculator from './../src/js/Calculator.js'

describe('Calculator', () => {
  let date1;
  
  beforeEach(() => {
    date1 = new Calculator("3");
  });

  test('It should return true after invoking the getDay function', () => {
    expect(date1.day).toBeTruthy();
  });

  afterEach(() => {
    date1 = new Calculator("11 11 2021");
  });
  
  test('It should return Thursday as the day', () => {
    expect(date1.day).toBe("Thursday");
  });
});