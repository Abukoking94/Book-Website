import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { motion, AnimatePresence } from "framer-motion";

const BookCard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  const fetchBooks = async () => {
    if (!query) return;

    try {
      setLoading(true);
      const startIndex = (page - 1) * 12;
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&startIndex=${startIndex}&maxResults=12`
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
      setTotalPages(Math.ceil(data.totalItems / 12));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(searchInput);
  };

  useEffect(() => {
    fetchBooks();
  }, [query, page]);

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

  const handleAddToFavorites = (book) => {
    const existing = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = existing.some((b) => b.id === book.id);
    if (!isAlreadyFavorite) {
      localStorage.setItem("favorites", JSON.stringify([...existing, book]));
      alert("Book added to favorites!");
    } else {
      alert("Already in favorites");
    }
  };

  return (
    <div className="w-full h-[fit-content] bg-white/30 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Book Search
      </h1>

      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />

      <AnimatePresence>
        {loading ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-700"></div>
            <p className="mt-2 text-gray-600">Loading books...</p>
          </div>
        ) : books.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white/50 text-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col"
                >
                  <a
                    href={book.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center py-4"
                  >
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-[160px] h-[200px] object-cover"
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
                    <p className="text-xs text-gray-800 mt-1">
                      {book.categories}
                    </p>
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
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => handleAddToFavorites(book)}
                      className="mt-2 w-[80%] bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded transition-colors duration-300"
                    >
                      Add to Favorites
                    </button>
                  </div>
                  <div className="p-4 flex justify-center items-center">
                    <a
                      href={book.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" w-[80%] text-center bg-[rgba(114,105,201,0.85)] hover:bg-[rgb(131,81,189)] text-white py-2 px-4 rounded transition-colors duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1 || loading}
                className={`px-4 py-2 mx-1 border rounded ${
                  page === 1
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-gray-700 text-white hover:bg-gray-800"
                }`}
              >
                Previous
              </button>

              <span className="px-4 py-2 mx-1 border rounded bg-gray-100 text-black">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page >= totalPages || loading}
                className={`px-4 py-2 mx-1 border rounded ${
                  page >= totalPages
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-gray-700 text-white hover:bg-gray-800"
                }`}
              >
                Next
              </button>
            </div>
          </motion.div>
        ) : query ? (
          <p className="text-center text-gray-500 text-lg mt-8">
            No books found. Try a different search.
          </p>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-8">
            Search for books above
          </p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookCard;
