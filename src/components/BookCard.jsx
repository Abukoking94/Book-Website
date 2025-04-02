import { useEffect, useState } from "react";

const Hero = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);

  
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=`
        );

        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
};

export default Hero;
