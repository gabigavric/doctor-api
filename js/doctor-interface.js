import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $("#form").submit(function() {
    event.preventDefault();
    $('#showResults').text('');
    let query = $('#query').val();
    doctor.callApi(query);
  });
});
