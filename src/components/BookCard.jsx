import { useEffect, useState } from "react";

const BookCard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const fetchBooks = async () => {
    if (!searchQuery) return;

    try {
      setLoading(true);
      const startIndex = (page - 1) * 12;
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchQuery
        )}&startIndex=${startIndex}&maxResults=12&key=AIzaSyAtZxon2bKZvQUnvW-n1KSxScTAa9cLO3I`
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
    setSearchQuery(searchInput);
    setPage(1); // Reset to first page on new search
  };

  useEffect(() => {
    fetchBooks();
  }, [searchQuery, page]);

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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Book Search
      </h1>

      {/* Search Form */}

      <div className="home-page">
        <form
          onSubmit={handleSearch}
          className="searchBar mb-8 flex justify-center"
        >
          <div className="relative w-full max-w-md flex">
            <input
              placeholder="Search Bar"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              className="searchInput"
            />
            <button className="searchBtn">
              <i className="bx bx-search-alt-2 "></i>
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Loading books...</p>
        </div>
      ) : books.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col"
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
                    className="w-full h-60 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getPlaceholder(book.title);
                    }}
                  />
                </a>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    By {book.authors}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
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
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {book.description}
                  </p>
                </div>
                <div className="p-4">
                  <a
                    href={book.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 mx-1 border rounded ${
                page === 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-gray-700 text-white hover:bg-gray-800"
              }`}
            >
              Previous
            </button>

            <span className="px-4 py-2 mx-1 border rounded bg-gray-100">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page >= totalPages}
              className={`px-4 py-2 mx-1 border rounded ${
                page >= totalPages
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-gray-700 text-white hover:bg-gray-800"
              }`}
            >
              Next
            </button>
          </div>
        </>
      ) : searchQuery ? (
        <p className="text-center text-gray-500 text-lg">
          No books found. Try a different search.
        </p>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          Search for books above
        </p>
      )}
    </div>
  );
};

export default BookCard;
