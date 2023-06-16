import { useState } from "react";
import EditForm from "./EditForm";
import { Book } from "./types";

interface Props {
  bookList: Book[];
  addBook: (book: Book) => void;
  setFilterText: (value: string) => void;
}

function SearchBar({ setFilterText, addBook, bookList }: Props) {
  let [showAdd, setShowAdd] = useState(false);

  return (
    <div className="search-bar">
      <div>
        <button type="button" onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? "Cancel" : "Add"}
        </button>
      </div>
      {showAdd && (
        <EditForm
          onSubmitForm={(book: Book) => {
            if (book.name == "") {
              alert("The book name cannot be empty");
              return;
            }

            let idx = 0;

            for (const key in bookList) {
              if (bookList[key].id > idx) {
                idx = bookList[key].id;
              }
            }

            addBook({
              ...book,
              id: idx + 1,
            });

            setShowAdd(false);
          }}
        ></EditForm>
      )}
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Please enter book name."
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            setFilterText(event.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
