const baseUrl = "http://localhost:3001"

export const getPackages = () => {
    return fetch(`${baseUrl}/data`);
};