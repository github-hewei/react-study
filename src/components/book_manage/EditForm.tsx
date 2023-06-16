import { useState } from "react";
import { Book } from "./types";

interface Props {
  onSubmitForm: (book: Book) => void;
}

function EditForm({ onSubmitForm }: Props) {
  const [book, setBook] = useState<Book>({
    id: 0,
    name: "",
    author: "",
    price: 0,
  });

  // 提交表单事件
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 阻止表单提交
    event.preventDefault();
    onSubmitForm(book);
  };

  // 表单输入事件
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={book.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="author">Author: </label>
        <input
          id="author"
          name="author"
          type="text"
          value={book.author}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input
          id="price"
          name="price"
          type="text"
          value={book.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default EditForm;
