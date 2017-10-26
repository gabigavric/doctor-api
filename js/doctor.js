export class Doctor {

  makePromise(api_key){
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = api_key;
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


    callApi(promise){
      promise.then(function(response) {
        let body = JSON.parse(response);
    });

  }
}
