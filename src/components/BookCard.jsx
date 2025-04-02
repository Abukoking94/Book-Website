import { useState } from "react";

const Hero = () => {
  const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q`
        );

        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

      } catch (error) {
        console.error(error);
      }

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
    };

  fetchBooks();
  
  return;
};

export default Hero;



