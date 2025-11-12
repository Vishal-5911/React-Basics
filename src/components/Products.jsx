import React, { useContext } from "react";
import MyContext from "../contexts/ProductContext";

export default function Products() {
  const { products, searchText } = useContext(MyContext);
  console.log("searchText", searchText);

  return (
    <div>
      <div>
        <p>Products</p>
      </div>
      <div className="products">
        {products
          ?.filter((item) =>
            String(item?.title)
              .toLowerCase()
              .includes(String(searchText).toLowerCase())
          )
          ?.map((item) => (
            <div className="product" key={item?.id}>
              <img className="product-img" src={item?.image} />
              <div>
                <p className="product-title">{item?.title}</p>
                <span className="product-desc">{item?.description}</span>
              </div>
            </div>
          ))}
        {products?.filter((item) =>
          String(item?.title)
            .toLowerCase()
            .includes(String(searchText).toLowerCase())
        ).length === 0 && (
          <p>
            NO products found with search text : <b>{searchText}</b>
          </p>
        )}
      </div>
    </div>
  );
}