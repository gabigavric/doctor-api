import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
console.info("document is ready");
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    let doctor = new Doctor();
    let name = $('#name').val();
    let query = $('#query').val();
    let location = $('#location').val();
    console.info("About to call API with:" + name + ':' +query +':'+ location);
    let promise = doctor.callApi(name,query,location);
  });

});
