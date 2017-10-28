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

    promise.then(function(response) {
      let data = JSON.parse(response);
      console.info(data);
      let practices = data.data[0].practices;
      $('#practices').text(`${practices[0].name}`);
    }, function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
  });
