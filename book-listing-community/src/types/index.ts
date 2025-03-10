export interface Book {
    id: string;
    title: string;
    author: string;
    publishedDate: string;
    genre: string;
    description: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    favoriteBooks: string[];
}

export interface Review {
    id: string;
    bookId: string;
    userId: string;
    rating: number;
    comment: string;
}