import React from "react";
import DataTable from "../dataTable/DataTable";

const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <img
        src={params.row.img || "/noproduct.png"}
        alt=""
        className="w-8 h-8 rounded-lg object-cover border border-slate-200"
      />
    ),
  },
  { field: "title", headerName: "Title", minWidth: 150, flex: 1 },
  { field: "color", headerName: "Color", width: 110 },
  { field: "price", headerName: "Price", width: 110 },
  { field: "producer", headerName: "Producer", width: 140 },
  { field: "createdAt", headerName: "Created At", width: 120 },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 110,
    renderCell: (params) => (
      <span
        className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
          params.value
            ? "bg-emerald-100 text-emerald-700"
            : "bg-amber-100 text-amber-700"
        }`}
      >
        {params.value ? "In Stock" : "Out of Stock"}
      </span>
    ),
  },
];

const productRows = [
  {
    id: 1,
    title: "PlayStation 5 Digital Edition",
    color: "White",
    price: "$499.99",
    producer: "Sony",
    createdAt: "12.08.2026",
    inStock: true,
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=150",
  },
  {
    id: 2,
    title: "MacBook Pro 16",
    color: "Space Gray",
    price: "$2,499.00",
    producer: "Apple",
    createdAt: "15.08.2026",
    inStock: false,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=150",
  },
];

const ProductsPage = () => {
  return (
    <div className="p-3 sm:p-6 w-full max-w-7xl mx-auto overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <DataTable
          title="Products Catalog"
          slug="products"
          rowsData={productRows}
          columnsData={productColumns}
        />
      </div>
    </div>
  );
};

export default ProductsPage;