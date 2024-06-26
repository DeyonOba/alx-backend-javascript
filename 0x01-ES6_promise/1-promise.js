import { resolve } from "path";

export default function getResponseFromAPI(success) {
    const promise = new Promise((resolve, reject) => {
        if (success){
            resolve(
                {
                    'status': 200,
                    'body': 'Success'
                }
            );
        } else {
            reject(Error('The fake API is not working currently'));
        }
    });
    return promise;
  }
