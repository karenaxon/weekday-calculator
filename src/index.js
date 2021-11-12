import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/Calculator.js';

$("#pass").on("keyup", function() {
  if ($(this).val() === 13) {
    $("form").on("click");
  }
});

$("#input").on("click", function(){
  $("#output").hide();
});

$("form").on("submit", function(){
  event.preventDefault();
  let inputDate = $("#input").val();

  const validatedDate = new Date(inputDate);

  if (isNaN(validatedDate.getTime())) { 
    $("#output").text("Invalid input. Please enter a date in the MM DD YYYY format.").show();
    $("form").trigger("reset");
  } else {
    const day = new Calculator(validatedDate);
    $("#output").text(`The day was ${day.day}`).show();
    $("form").trigger("reset");
  }
}); 