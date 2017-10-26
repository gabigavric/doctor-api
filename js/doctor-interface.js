import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#form").submit(function() {
    event.preventDefault();
    $('#showResults').text('');
    let query = $('#query').val();
    doctor.callApi(query);
  });
});
