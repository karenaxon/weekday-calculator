export default class Calculator {

  constructor(date) {
    this.date = date;
    this.day = this.getDay(date);
  }

  getDay(string) {
    let date = new Date(string);
    const options = { weekday: 'long'};
  
    return  new Intl.DateTimeFormat('en-US', options).format(date);
  }
}