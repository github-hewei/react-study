import { Card, Collapse } from "@blueprintjs/core";
import { Classes } from "@blueprintjs/core";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import EditForm from "./EditForm";
import { useState } from "react";
import { Book } from "./types";

function initializeBooks() {
  return useState<Book[]>([
    {
      id: 3,
      title:
        "Learning React: A Hands-On Guide to Building Web Applications Using React and Redux",
      author: "Kirupa Chinnathambi",
      price: "$29.99",
    },
    {
      id: 2,
      title: "CSS Mastery: Advanced Web Standards Solutions",
      author: "Andy Budd",
      price: "$45.0",
    },
    {
      id: 1,
      title: "Designing Interfaces: Patterns for Effective Interaction Design",
      author: "Jenifer Tidwell",
      price: "$24.49",
    },
  ]);
}

function BookManage() {
  let [filterText, setFilterText] = useState("");
  let [formVisible, setFormVisible] = useState(false);
  let [books, setBooks] = initializeBooks();

  return (
    <Card className={Classes.ELEVATION_2}>
      <h4>图书管理</h4>

      {/* 添加表单 */}
      <Collapse isOpen={formVisible}>
        <EditForm
          onSubmitForm={(book: Book) => {
            let id: number = 0;

            for (const key in books) {
              if (books[key].id > id) {
                id = books[key].id;
              }
            }

            setBooks([
              {
                ...book,
                id: id + 1,
              },
              ...books,
            ]);
          }}
        ></EditForm>
      </Collapse>

      {/* 搜索框 */}
      <SearchBar
        formVisible={formVisible}
        setFormVisible={setFormVisible}
        filterText={filterText}
        setFilterText={setFilterText}
      ></SearchBar>

      {/* 书籍列表 */}
      <BookList
        books={books}
        filterText={filterText}
        delBook={(book: Book) => {
          setBooks(books.filter((item: Book) => item.id !== book.id));
        }}
      ></BookList>
    </Card>
  );
}

export default BookManage;
