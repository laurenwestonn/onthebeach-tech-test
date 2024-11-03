const baseUrl = "http://localhost:3001"

export const getHotels = () => {
    return fetch(`${baseUrl}/data`);
};