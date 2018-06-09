/**
 * EasyHTTP Library
 * Library for making HTTP request
 *
 * @version 2.0.0
 * @author uanoob
 * @license MIT
 *
 **/

class EasyHTTP {
  //  Make an HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
}
