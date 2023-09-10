import React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Rating } from "@mui/material";
// import { Card } from "@mui/material";

const columns = [
  {
    field: "image",
    headerName: "IMG",
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <img
        src={params.value}
        height="30"
        width="30"
        style={{ marginLeft: "10px" }}
        alt="product"
      />
    ),
  },
  {
    field: "title",
    headerName: "Product Name",
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
  { field: "category", headerName: "Category", sortable: false, width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  {
    field: "rating",
    headerName: "Rating",
    width: 130,
    valueFormatter: ({ value }) => value.rate,
    renderCell: (params) => (
      <Rating
        size="small"
        readOnly
        defaultValue={params.value.rate}
        precision={0.5}
      />
    ),
    sortComparator: (a, b) => {
      if (a.rate > b.rate) return 1;
      if (a.rate < b.rate) return -1;
      if (a.rate === b.rate) return 0;
    },
  },
];

const DataTable = ({ products }) => {
  const { category, description, id, image, price, rating, title } = products;
  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableSelectionOnClick
      />
       */}
      {/* <div>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <h3>{category}</h3>
        <h2>{price}</h2>
        <p>{description}</p>
        <p>{rating.rate}</p>
      </div> */}

      {console.log(products.id)}

      {console.log(products)}
    </div>
  );
};

export default DataTable;
