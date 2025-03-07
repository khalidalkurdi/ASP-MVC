﻿var dataTable;
$(document).ready(
    function () {
        loadDataTable();
    }
);
function loadDataTable() {
    dataTable = $('#tabledata').DataTable({
        ajax: {
            url: '/Admin/Product/GetAll'
        },
        columns: [
            { data: 'title', "width": "20%" },
            { data: 'isbn', "width": "15%" },
            { data: 'author', "width": "15%" },
            { data: 'listPrice', "width": "10%" },
            { data: 'Category.name', "width": "15%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                        <a onClick=Delete('/Admin/Product/Delete/${data}') class="btn btn-danger mx-2"><i class="bi bi-trash"></i></a>
                        <a href="/Admin/Product/Upsert?id=${data}" class="btn btn-primary mx-2"><i class="bi bi-pencil-square"></i></a>
                    </div>`;
                },
                "width": "15%"
            }
        ]
    });
}
function Delete(Url) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url:Url,
                type:"DELETE",
                success: function (data) {
                    dataTable.ajax.reload();
                    toastr.success(data.message);
                }
            })            
        }
    });
}