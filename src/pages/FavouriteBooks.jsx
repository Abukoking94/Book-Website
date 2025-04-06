import React, { useEffect, useState } from "react";

function FavoriteBooks() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const handleRemove = (id) => {
    const updated = favorites.filter((book) => book.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="w-full h-fit bg-white/30 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Your Favorite Books
      </h1>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((book) => (
            <div
              key={book.id}
              className="bg-white/50 shadow-lg rounded-lg p-4 flex flex-col"
            >
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-60 object-cover mb-2"
              />
              <h3 className="text-lg font-bold text-black line-clamp-2">
                {book.title}
              </h3>
              <p className="text-sm text-gray-800 mt-1">By {book.authors}</p>
              <p className="text-xs text-gray-600">{book.categories}</p>
              <button
                onClick={() => handleRemove(book.id)}
                className=" mt-3 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg mt-8">
          No favorite books added yet.
        </p>
      )}
    </div>
  );
}

export default FavoriteBooks;
