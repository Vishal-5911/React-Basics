import { createContext, useContext } from "react";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import MyContext from "./contexts/ProductContext";

const RenderTest = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });
      const finalData = await res.json();
      // console.log("finalData=>", finalData);
      setData(finalData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <MyContext
        value={{
          products: data,
          searchText: searchText,
          onTextChange: setSearchText,
        }}
      >
        <Header />
        <div>
          <Products />
        </div>
      </MyContext>
    </div>
  );
};

export default RenderTest;