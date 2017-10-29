import {
  Doctor
} from './../js/doctor.js';

$(document).ready(function() {
  console.info("document is ready");
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    let doctor = new Doctor();
    let name = $('#name').val();
    let query = $('#query').val();
    console.info("About to call API with:" + name + ':' + query);
    let promise = doctor.callApi(name, query);

    promise.then(function(response) {
      let data = JSON.parse(response);
      console.info(data);

      if (data.data.length > 0) {
        $('#practices').text('');
        for (let i = 0; i < data.data.length; i++) {
          let liRecord = `<li>`;
          let profile = data.data[i].profile;
          liRecord+=` ${profile.first_name} ${profile.last_name} `;
          let practices = data.data[i].practices[0];
          if (practices) {
            if (practices.phones) {
              liRecord+=` ${practices.phones[0].number} `;
            }
            if ('#practices.visit_address') {
              let address = practices.visit_address;
              liRecord+=`${address.street}` +
                ` ${address.state_long}` +
                ` ${address.city}` +
                ` ${address.zip}`;
            }
            if (practices.website) {
              liRecord+=` ${practices.website}`;
            }
            if (practices.accepts_new_patients) {
              liRecord+=" Accepting New Patients";
            } else {
              liRecrod+=" Sorry No New Patients";
            }
          }
          liRecord+=`</li>`;

          $('#practices').append(liRecord);
        }
      } else {
        $('#practices').text("No Doctors Found");
      }
    }, function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
