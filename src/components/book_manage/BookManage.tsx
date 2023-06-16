import SearchBar from "./SearchBar";
import BookList from "./BookList";
import { useState } from "react";
import { Book } from "./types";

function BookManage() {
  let [bookList, setBookList] = useState<Book[]>([]);
  let [filterText, setFilterText] = useState("");

  return (
    <div className="book-manage">
      <SearchBar
        bookList={bookList}
        setFilterText={(value: string) => setFilterText(value)}
        addBook={(book: Book) => {
          setBookList([book, ...bookList]);
        }}
      ></SearchBar>
      <BookList
        filterText={filterText}
        bookList={bookList}
        delBook={(id: number) => {
          setBookList(bookList.filter((item) => item.id != id));
        }}
      ></BookList>
    </div>
  );
}

export default BookManage;
