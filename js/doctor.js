export class Doctor {

  callApi()
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = "https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=45.5231%C2%B0%20N%2C%20122.6765%C2%B0%20W&user_location=37.773%2C-122.413&skip=0&limit=25"

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
