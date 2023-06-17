import { Button, HTMLTable } from "@blueprintjs/core";
import { Book } from "./types";

interface Props {
  books: Book[];
  filterText: string;
  delBook: (book: Book) => void;
}

function BookList({ books, delBook, filterText }: Props) {
  const rows: React.ReactNode[] = [];

  books.forEach((item: Book) => {
    if (filterText !== "" && !item.title.includes(filterText)) {
      return;
    }

    rows.push(
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.author}</td>
        <td>{item.price}</td>
        <td>
          <Button
            small={true}
            onClick={() => {
              delBook(item);
            }}
          >
            删除
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <HTMLTable
      style={{ border: "solid 1px #dcdcdd", width: "100%" }}
      bordered={true}
      compact={true}
      interactive={true}
      striped={true}
    >
      <thead>
        <tr>
          <th>编号</th>
          <th>书名</th>
          <th>作者</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </HTMLTable>
  );
}

export default BookList;
