import { useEffect, useState } from "react";

const BookCard = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            searchQuery
          )}&maxResults=12`
        );

        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

        const mappedBooks =
          data.items?.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title || "Untitled",
            authors: item.volumeInfo.authors?.join(", ") || "Unknown Author",
            categories: item.volumeInfo.categories?.join(", ") || "General",
            rating: item.volumeInfo.averageRating || 0,
            pageCount: item.volumeInfo.pageCount || "N/A",
            printType: item.volumeInfo.printType || "Unknown",
            ratingsCount: item.volumeInfo.ratingsCount || 0,
            imageUrl:
              item.volumeInfo.imageLinks?.thumbnail ||
              getPlaceholder(item.volumeInfo.title),
            description: item.volumeInfo.description || "",
            infoLink: item.volumeInfo.infoLink || "#",
          })) || [];

        setBooks(mappedBooks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  const getPlaceholder = (title) => {
    const initials = title ? title[0] : "?";
    return `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
             <rect width="100%" height="100%" fill="#2D3748"/>
             <text x="50%" y="50%" fill="#4A5568" font-family="monospace" font-size="80" 
             text-anchor="middle" dominant-baseline="middle">${initials}</text>
             </svg>`
    )}`;
  };
  
 return books.length > 0 ? (
   <div>
     {books.map((book) => (
       <div key={book.id}>
         <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
           <img
             src={book.imageUrl}
             alt={book.title}
             onError={(e) => {
               e.target.onerror = null;
               e.target.src = getPlaceholder(book.title);
             }}
           />
         </a>
         <div>
           <h3>{book.title}</h3>
           <p>By {book.authors}</p>
           <p>{book.categories}</p>
           <div>
             <span>⭐ {book.rating}</span>
             <span>({book.ratingsCount} ratings)</span>
           </div>
           <p>{book.description}</p>
         </div>
         <div>
           <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
             View Details
           </a>
         </div>
       </div>
     ))}
   </div>
 ) : (
   <p>No books found</p>
 );

};
export default BookCard;
