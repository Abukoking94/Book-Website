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
    <div className="card-main-bg max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="cards-bg shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col"
          >
            <a
              href={book.infoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={book.imageUrl}
                alt={book.title}
                className=" photo-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getPlaceholder(book.title);
                }}
              />
            </a>
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-semibold text-black line-clamp-2">
                {book.title}
              </h3>
              <p className="text-sm text-white mt-1">By {book.authors}</p>
              <p className="text-xs text-gray-800 mt-1">{book.categories}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-sm">
                  ⭐ {book.rating}
                </span>
                <span className="ml-2 text-xs text-gray-500">
                  ({book.ratingsCount} ratings)
                </span>
              </div>
              <p className="text-sm text-gray-800 mt-2 line-clamp-2">
                {book.description}
              </p>
            </div>
            <div className="p-4">
              <a
                href={book.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center custom-bg hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p>No books found</p>
  );
};
export default BookCard;
