// const apiKey = require('./../.env').apiKey; DO I NEED THIS?

//ALSO WHERE DO I PUT THIS
//`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=97219&skip=0&limit=10&user_key=${apiKey}`;

export class Doctor {
  constructor() { ////close this
}

makePromise(api_key){
  let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let url = api_key
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
