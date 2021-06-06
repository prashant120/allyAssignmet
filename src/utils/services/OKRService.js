import APIWrapper from "./APICallWrapper";
import { BASE_URL, OKR_LIST } from "../constant";

/**
 * 
 * Service specific method to make API call to get list of OKR's.
 * @returns List of OKR which are received as API response.
 */
export default async function OKRServices() {
    try {
        let okrList = await APIWrapper(`${BASE_URL}${OKR_LIST}`);
        return okrList.data;
    } catch (error) {
        return error;
    }
}