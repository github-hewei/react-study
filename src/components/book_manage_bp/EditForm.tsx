import { Button, InputGroup, FormGroup, Card } from "@blueprintjs/core";
import { Book } from "./types";
import { useState } from "react";

interface Props {
  onSubmitForm: (book: Book) => void;
}

function EditForm({ onSubmitForm }: Props) {
  const [book, setBook] = useState<Book>({
    id: 0,
    title: "",
    author: "",
    price: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Card>
      {/* 书名 */}
      <FormGroup inline={true} label="书名：">
        <InputGroup
          id="title"
          name="title"
          leftIcon="book"
          required={true}
          placeholder="请输入书名"
          autoComplete="off"
          value={book.title}
          onInput={handleChange}
        ></InputGroup>
      </FormGroup>

      {/* 作者 */}
      <FormGroup inline={true} label="作者：">
        <InputGroup
          id="author"
          name="author"
          leftIcon="person"
          required={true}
          placeholder="请输入作者姓名"
          autoComplete="off"
          value={book.author}
          onInput={handleChange}
        ></InputGroup>
      </FormGroup>

      {/* 价格 */}
      <FormGroup inline={true} label="价格：">
        <InputGroup
          id="price"
          name="price"
          leftIcon="dollar"
          required={true}
          type="number"
          autoComplete="off"
          placeholder="请输入价格"
          value={book.price}
          onInput={handleChange}
        ></InputGroup>
      </FormGroup>

      {/* 提交按钮 */}
      <Button
        onClick={() => {
          onSubmitForm(book);
          setBook({
            id: 0,
            title: "",
            author: "",
            price: "",
          });
        }}
      >
        保存
      </Button>
    </Card>
  );
}

export default EditForm;
