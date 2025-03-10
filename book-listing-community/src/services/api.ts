import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/books';

export const getBooks = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

export const addBook = async (book) => {
    try {
        const response = await axios.post(API_BASE_URL, book);
        return response.data;
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
};

export const deleteBook = async (bookId) => {
    try {
        await axios.delete(`${API_BASE_URL}/${bookId}`);
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};