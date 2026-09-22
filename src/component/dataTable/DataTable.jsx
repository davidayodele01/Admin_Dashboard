import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

// Confirmation Modal Component
const DeleteModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full p-6 mx-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-100 rounded-full text-rose-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              Confirm Deletion
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            ✕
          </button>
        </div>

        <p className="text-slate-600 text-sm mb-6">
          Are you sure you want to delete {itemName || "this item"}? This action
          cannot be undone.
        </p>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Generic DataTable Component
const DataTable = ({
  rowsData = [],
  columnsData = [],
  slug = "items", // e.g., "users" or "products" for Link routing
  title = "",
  pageSize = 7,
}) => {
  const [rows, setRows] = useState(rowsData);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    targetId: null,
  });

  const openDeleteModal = (id) => {
    setDeleteModal({ isOpen: true, targetId: id });
  };

  const closeDeleteModal = () => {
    setDeleteModal({ isOpen: false, targetId: null });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.targetId !== null) {
      setRows((prevRows) =>
        prevRows.filter((row) => row.id !== deleteModal.targetId),
      );
      closeDeleteModal();
    }
  };

  // Action column appended automatically to custom columns
  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    width: 140,
    sortable: false,
    renderCell: (params) => (
      <div className="flex items-center gap-2 justify-center pt-[16px]">
        <Link
          to={`/${slug}/${params.row.id}`}
          state={{ item: params.row }}
          onClick={(e) => e.stopPropagation()}
          className="px-2.5 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded text-xs font-semibold transition-colors flex items-center justify-center"
        >
          View
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation();
            openDeleteModal(params.row.id);
          }}
          className="px-2.5 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded text-xs font-semibold transition-colors flex items-center justify-center"
        >
          Delete
        </button>
      </div>
    ),
  };

  // Combine parent columns with the actions column
  const columns = [...columnsData, actionColumn];

  return (
    <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      {title && (
        <h2 className="text-xl font-bold text-slate-800 mb-4">{title}</h2>
      )}

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize },
          },
        }}
        pageSizeOptions={[7, 15, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        sx={{
          border: 0,
          "& .MuiDataGrid-row": {
            cursor: "pointer",
          },
        }}
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={closeDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default DataTable;
