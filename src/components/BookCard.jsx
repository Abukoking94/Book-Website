import { useEffect, useState } from 'react';

const Hero = ({ searchQuery }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
                        searchQuery
                    )}&maxResults=35`
                );

                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();

                const mappedBooks = data.items?.map(item => ({
                    id: item.id,
                    title: item.volumeInfo.title || 'Untitled',
                    authors: item.volumeInfo.authors?.join(', ') || 'Unknown Author',
                    categories: item.volumeInfo.categories?.join(', ') || 'General',
                    rating: item.volumeInfo.averageRating || 0,
                    pageCount: item.volumeInfo.pageCount || 'N/A',
                    printType: item.volumeInfo.printType || 'Unknown',
                    ratingsCount: item.volumeInfo.ratingsCount || 0,
                    imageUrl: item.volumeInfo.imageLinks?.thumbnail || getPlaceholder(item.volumeInfo.title),
                    description: item.volumeInfo.description || '',
                    infoLink: item.volumeInfo.infoLink || '#',
                })) || [];

                setBooks(mappedBooks);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBooks();
    }, [searchQuery]);

    const getPlaceholder = (title) => {
        const initials = title ? title[0] : '?';
        return `data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
            <rect width="100%" height="100%" fill="#2D3748"/>
            <text x="50%" y="50%" fill="#4A5568" font-family="monospace" font-size="80" 
            text-anchor="middle" dominant-baseline="middle">${initials}</text>
            </svg>`
        )}`;
    };

    return (
        <div>
            {books.length === 0 ? <p>No books found</p> : (
                books.map(book => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <img src={book.imageUrl} alt={book.title} />
                    </div>
                ))
            )}
        </div>
    );
};

export default Hero;
