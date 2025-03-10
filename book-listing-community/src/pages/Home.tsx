import React from 'react';
import BookList from '../components/BookList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Book Listing Community</h1>
            <p>Discover and share your favorite books!</p>
            <BookList />
        </div>
    );
};

export default Home;