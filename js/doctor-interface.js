import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#form').submit(function(event) {
    event.preventDefault();
    let doctor = new Doctor();
    let concern = $('#concern').val();
    let name = $('#name').val();
    //do i define promise in here and put the link in here?
    let promise = doctor.makePromise(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${concern}&location=97219&skip=0&limit=10&user_key=${apiKey}`;)
    doctor.callApi(query);
  });

});
