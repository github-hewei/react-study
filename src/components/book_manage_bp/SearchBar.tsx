import {
  Button,
  ControlGroup,
  InputGroup,
  Collapse,
  Card,
} from "@blueprintjs/core";
import { useState } from "react";

interface Props {
  formVisible: boolean;
  filterText: string;
  setFormVisible: (value: boolean) => void;
  setFilterText: (value: string) => void;
}

function SearchBar({
  formVisible,
  setFormVisible,
  filterText,
  setFilterText,
}: Props) {
  let [text, setText] = useState(filterText);

  return (
    <div style={{ margin: "20px 0" }}>
      <ControlGroup>
        <InputGroup
          id="filterText"
          name="filterText"
          placeholder="请输入书名"
          value={text}
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            setText(event.currentTarget.value);
          }}
        ></InputGroup>
        <Button
          icon="filter"
          onClick={() => {
            console.log("text", text);
            setFilterText(text);
          }}
        >
          筛选
        </Button>
        <Button
          icon="plus"
          onClick={() => {
            setFormVisible(!formVisible);
          }}
        >
          {formVisible ? "取消" : "添加"}
        </Button>
      </ControlGroup>
    </div>
  );
}

export default SearchBar;
