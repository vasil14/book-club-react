import React, { createContext, useContext, useState } from "react";
import axios from "../api/axios";

interface Props {
  children: React.ReactNode;
}

const BookContext = createContext({});

export const BookProvider = ({ children }: Props) => {
  const [book, setBook] = useState({});
  const [booksCategory, setBooksCategory] = useState({});

  const getBook = async (slug: string) => {
    try {
      const response = await axios.get(`/api/book/${slug}`);
      // console.log(response);
      setBook(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getBookByCategory = async (category: string) => {
    try {
      const response = await axios.get(`/api/category/${category}`);
      setBooksCategory(response.data);
    } catch (error) {}
  };

  return (
    <BookContext.Provider
      value={{ book, setBook, getBook, booksCategory, getBookByCategory }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default function useBookContext() {
  return useContext(BookContext);
}
