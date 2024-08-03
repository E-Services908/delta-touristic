// import { FOURSQUARE_API_KEY } from "./constants";
const FOURSQUARE_API_KEY = "fsq3wRIi/7lKXCTHhgNKK/U96u77gJInrDnxRIxTTLMJRf4=";

const getHeader = (formData = false) => {
    const header = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: FOURSQUARE_API_KEY,
        }
    };
    return header;
};

export default getHeader;
