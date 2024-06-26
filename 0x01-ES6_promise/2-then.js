import { resolve } from "path";

function handleResponseFromAPI(promise) {
    const response = {'status': 200, 'body': 'Success'}
    return promise
    .then(() => response)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'))
  }

export default handleResponseFromAPI;
