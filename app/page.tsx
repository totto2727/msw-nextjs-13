"use client";

import { Book } from "@/lib/mock/type";
import axios from "axios";
import { useEffect, useState } from "react";
import { createWorker } from "../lib/mock/browser";

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    if (typeof window !== "undefined") {
      createWorker().start();
      console.log("start mock in browser");
    }
  }
}

export default function Home() {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    (async () => {
      const res = await axios.get<Book>("https://my.backend/book");
      const book = res.data;
      setBook(book);
    })();
  }, [setBook]);

  if (!book) return <div>loading</div>;
  return (
    <div>
      <img src={book.imageUrl} alt={book.title} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
}
