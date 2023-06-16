import { ReactNode, useState } from "react";

function FilterableProductTable() {
  // Test data
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  let [filterText, setFilterText] = useState("");
  let [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div
      className="filterableProductTable"
      style={{ width: "300px", padding: "10px" }}
    >
      {/* Search bar */}
      <SearchBar
        setFilterText={(value: string) => {
          setFilterText(value);
        }}
        setInStockOnly={(value: boolean) => {
          setInStockOnly(value);
        }}
      ></SearchBar>

      {/* Product Table */}
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      ></ProductTable>
    </div>
  );
}

interface SearchBarProps {
  setFilterText: (value: string) => void;
  setInStockOnly: (value: boolean) => void;
}

function SearchBar({ setFilterText, setInStockOnly }: SearchBarProps) {
  return (
    <div className="searchBar">
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilterText(event.target.value);
          }}
          // onInput={(event: React.FormEvent<HTMLInputElement>) => {
          //   //console.log(event.currentTarget.value);
          //   setFilterText(event.currentTarget.value);
          // }}
        />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInStockOnly(event.target.checked);
          }}
        />
        <span>Only show products in stock</span>
      </div>
    </div>
  );
}

interface ProductTableProps {
  filterText: string;
  inStockOnly: boolean;
  products: {
    category: string;
    name: string;
    price: string;
    stocked: boolean;
  }[];
}

function ProductTable({
  products,
  filterText,
  inStockOnly,
}: ProductTableProps) {
  let lastCategory: string = "";
  let rows: ReactNode[] = [];

  // console.log("filterText", filterText);
  // console.log("inStockOnly", inStockOnly);

  products.forEach((item, index) => {
    if (item.category != lastCategory) {
      lastCategory = item.category;
      rows.push(
        <ProductCategoryRow
          key={"c" + index}
          category={lastCategory}
        ></ProductCategoryRow>
      );
    }

    if (inStockOnly && item.stocked) {
      return;
    }

    if (filterText !== "" && !item.name.includes(filterText)) {
      return;
    }

    rows.push(<ProductRow key={index} product={item}></ProductRow>);
  });

  return (
    <table className="ProductTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

interface ProductCategoryRowProps {
  category: string;
}

function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

interface ProductRowProps {
  product: {
    name: string;
    price: string;
    stocked: boolean;
  };
}

function ProductRow({ product }: ProductRowProps) {
  return (
    <tr>
      <td style={!product.stocked ? { color: "red" } : {}}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default FilterableProductTable;
