export class Doctor {

  callApi()
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = "https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=97219&skip=0&limit=25&user_key`${apiKey}`"

     request.onload = function() {
       if (this.status === 200) {
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

}
