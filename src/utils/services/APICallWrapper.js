/**
 * Generic construct for triggering all the API calls across the application.
 * @param {String} URL 
 * @param {Object} options 
 * @param {Object} payload 
 * @returns 
 */
export default async function APIWrapper(URL, options = {}, payload = {}) {
    let response = await fetch(URL, options);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Something went wrong');
    }
}