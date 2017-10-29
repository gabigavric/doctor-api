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
      let practices = data.data[0].practices[0];
      let profile = data.data[0].profile;
      let address =practices.visit_address;
      console.info(profile);
      if(data.meta.count > 0){
          $('#practices').text(`${profile.first_name} ${profile.last_name}`+
          ` ${practices.phones[0].number}` +
          ` ${address.street}` +
          ` ${address.state_long}`+
          ` ${address.city}`+
          ` ${address.zip}` +
          ` ${practices.website}`+
          ` Accepting New Patients: ${practices.accepts_new_patients}`);
      }else{
          $('#practices').text("No Doctors Found");
      }
    }, function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
  });
