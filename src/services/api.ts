import axios from "axios";

const BASE_URL = 'https://reqres.in/api/users';

export async function getUser(page: number) {
    try {
        const response = await axios.get(`${BASE_URL}?page=${page}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
