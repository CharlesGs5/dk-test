import axios from "axios";
import { User } from "@/types/user";

const BASE_URL = 'https://reqres.in/api/users';

export async function getUser(page: number) {
    try {
        const response = await axios.get(`${BASE_URL}?page=${page}`, {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getUserById(id: string | number): Promise<{ data: User }> {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`, {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw error;
    }
}
