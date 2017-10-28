export class Doctor {
  callApi(name,query,location){

    let apiKey = require('./../.env').apiKey;

    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=97219&skip=0&user_key=${apiKey}`;
      console.info('Console Log Message:' + url);
      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
