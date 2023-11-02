/* TODO:
Complete the following API functions to fetch user's data and its unmasked phone number.
Each request should be authenticated with a Bearer token of 'WellTheoryCode2023'.
Use the default fetch API.

(Optional) Use JSDoc to document the functions.
*/

/**
 * Send a request including the authorizarion header
 * 
 * @param {URL} url - the url to call
 * @param {String} method=GET - the method to be used (default to GET)
 * @returns {JSON}
 * 
 * TODO: Implement other https methods
 */

const sendAuthenticatedRequest = async (url: URL, method: string = 'GET') => {
  const headers = {
    'Authorization': 'Basic WellTheoryCode2023' //FIXME: Make it into the process.env
  };

  const options = {
    headers: headers,
    method: method
  };

  const fetchData = await fetch(
    url,
    options
  );

  return fetchData.json();
}

/**
 * Send a request to /me to fetch user data
 * 
 * @returns {JSON}
 * 
 * TODO: Handle errors
 * 
 */
export const me = async () => {
  const result = await sendAuthenticatedRequest(
    new URL('https://us-central1-internals-358114.cloudfunctions.net/react-challenge/me')
  );

  result.unmasked_phone = '';

  return result;
};

/**
 * Send a request to /phone to fetch unmasked phone number
 * 
 * @returns {JSON}
 * 
 *  TODO: Handle errors
 */
export const phone = async () => {
  const result = await sendAuthenticatedRequest(
    new URL('https://us-central1-internals-358114.cloudfunctions.net/react-challenge/phone')
  );

  return result;
};