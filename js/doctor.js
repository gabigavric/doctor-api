export class Doctor {
  callApi(name,query){
    let apiKey = require('./../.env').apiKey;
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      let url = `https://api.betterdoctor.com/2016-03-01/doctors?` +
                `user_key=${apiKey}&skip=0&location=45.523%2C-122.676%2C100`;
      if(name!=''){
        url +=`&name=${name}`
      }
      if(query!=''){
        url += `&query=${query}`
      }

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
    return promise;
  }
}
