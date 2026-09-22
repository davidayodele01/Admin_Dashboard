import React from "react";
import DataTable from "../dataTable/DataTable";

const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <img
        src={params.row.img || "/noavatar.png"}
        alt=""
        className="w-8 h-8 rounded-full object-cover border border-slate-200"
      />
    ),
  },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 160,
    valueGetter: (value, row) =>
      `${row?.firstName || ""} ${row?.lastName || ""}`.trim(),
  },
  { field: "email", headerName: "Email", width: 180 },
  { field: "phone", headerName: "Phone", width: 140 },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    renderCell: (params) => (
      <span
        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
          params.value
            ? "bg-emerald-100 text-emerald-700"
            : "bg-rose-100 text-rose-700"
        }`}
      >
        {params.value ? "Active" : "Inactive"}
      </span>
    ),
  },
];

const userRows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    email: "jon.snow@example.com",
    phone: "08012345678",
    status: true,
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    email: "cersei.l@example.com",
    phone: "08122267090",
    status: false,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
];

const UsersDataTable = () => {
  return (
    <div className="p-6">
      <DataTable
        title="Users Directory"
        slug="users"
        rowsData={userRows}
        columnsData={userColumns}
      />
    </div>
  );
};

export default UsersDataTable;
