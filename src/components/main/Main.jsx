import React, { useState, useEffect } from "react";
// import Table from "../MuiTable";
import "./main.css";
import { fetchProducts } from "../../api/index";

const Main = () => {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState([]);

  const fetchData = async () => {
    await fetchProducts()
      .then((data) => {
        setProductData(data);
        setCategories((prev) => [
          ...new Set(data.map((item) => item.category)),
        ]);
        setPrice((prev) => [...new Set(data.map((item) => item.price))]);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  console.log(price.sort((a, b) => a - b));
  // console.log(productData.price);
  console.log(categories);

  const fetchDataByCategorie = (e) => {
    fetchProducts(e.target.value)
      .then((data) => {
        setProductData(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  // const sort = async () => {
  //   await fetchProducts()
  //     .then((data) => {
  //       setProductData(data);

  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main_section">
      <div className="container">
        <div className="search_section">
          <i className={`fas fa-search $"search_icon}`}></i>
          <select
            className="search_input"
            onChange={(e) => fetchDataByCategorie(e)}
          >
            <option value="all">Category</option>
            {categories.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="search_section">
          <i className={`fas fa-search $"search_icon}`}></i>
          <select
            className="search_input"
            onChange={(e) => fetchDataByCategorie(e)}
          >
            <option value="all">Price</option>
            <option value="1">Low to High</option>
            <option value="2">High To Low</option>
          </select>
        </div> */}
        {/* <DataTable products={productData} /> */}
        <ul className="card-container">
          {productData.map((item) => {
            const { category, description, id, image, price, rating, title } =
              item;
            return (
              <li key={id} className="card">
                <img src={image} alt={title} className="img" />
                <h3 className="card-title">{title}</h3>

                <h3>₹ {price}</h3>
                {/* <p>{description}</p> */}
                <h4>Rating : {rating.rate}</h4>
                <h5>Category : {category}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
