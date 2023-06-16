import { ReactNode } from "react";
import { Book } from "./types";

interface Props {
  bookList: Book[];
  filterText: string;
  delBook: (id: number) => void;
}

function BookList({ bookList, filterText, delBook }: Props) {
  let rows: ReactNode[] = [];

  bookList.forEach((item: Book) => {
    if (filterText !== "" && !item.name.includes(filterText)) {
      return;
    }

    rows.push(
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.author}</td>
        <td>{item.price}</td>
        <td>
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => delBook(item.id)}
          >
            Del
          </span>
        </td>
      </tr>
    );
  });

  return (
    <div className="book-list">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Pperate</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default BookList;
