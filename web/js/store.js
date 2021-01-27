$(document).ready(function() {
    getStore();

    $(document).on('click', '#edit', function(e) {
        let table = $('#tableStore').DataTable();
        let jsonObj = table.row($(this).closest('td, li')).data();
        document.getElementById('hiddenStoreId').value = jsonObj._id;
        document.getElementById('storeNameEdit').value = jsonObj.store_name;
        document.getElementById('storeDetailEdit').value = jsonObj.store_desc;
        document.getElementById('telEdit').value = jsonObj.store_tel;
        document.getElementById('addressEdit').value = jsonObj.store_address;
        $('#modalEditStore').modal('show');
    });
});

const getStore = async() => {
    $('#tableStore').DataTable({
        "searching": false,
        "ordering": false,
        ajax: {
            url: `${url}/fetch_store`,
            type: 'POST',
            data: {},
        },
        columns: [{
                title: 'รหัสร้านค้า',
                data: '_id',
                render: function(data) {
                    if (data) {
                        return `<div id ="edit" class="text-primary" style="cursor:pointer">${data}</div>`;
                    } else {
                        return "-"
                    }
                }
            },
            {
                title: 'ชื่อร้านค้า',
                data: 'store_name',
            },
            {
                title: 'คำอธิบายร้านค้า',
                data: 'store_desc',
            },
            {
                title: 'เบอร์ติดต่อร้านค้า',
                data: 'store_tel',
            },
            {
                title: 'ที่อยู่',
                data: 'store_address',
            },
        ]
    });

}

$("#btnSaveStore").submit((e) => {
    e.preventDefault();
});

$("#modalCreateStore").on("hidden.bs.modal", () => {
    document.getElementById('storeName').value = ''
    document.getElementById('storeDetail').value = ''
    document.getElementById('tel').value = ''
    document.getElementById('address').value = ''
});

const handleSaveStore = async() => {
    try {
        let name = document.getElementById('storeName').value
        let description = document.getElementById('storeDetail').value
        let tel = document.getElementById('tel').value
        let address = document.getElementById('address').value
        if (name.length && description.length && tel.length && address.length) {
            const obj = {
                store_name: name,
                store_desc: description,
                store_tel: tel,
                store_address: address
            }
            document.getElementById('btnSaveStore').disabled = true
            const create = await asyncCallXMLHttpRequest(`${url}/create_store`, obj)
            if (create.statusCode == '200') {
                window.location.reload();
            } else {
                alert('create failed')
            }
            document.getElementById('btnSaveStore').disabled = false
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน !!')
        }
    } catch (error) {
        console.log(error);
    }
}

const handleUpdateStore = async() => {
    try {
        let storeId = document.getElementById('hiddenStoreId').value
        let name = document.getElementById('storeNameEdit').value
        let description = document.getElementById('storeDetailEdit').value
        let tel = document.getElementById('telEdit').value
        let address = document.getElementById('addressEdit').value
        if (name.length && description.length && tel.length && address.length) {
            const obj = {
                _id: storeId,
                store_name: name,
                store_desc: description,
                store_tel: tel,
                store_address: address
            }
            document.getElementById('btnUpdateStore').disabled = true
            const create = await asyncCallXMLHttpRequest(`${url}/update_store`, obj)
            if (create.statusCode == '200') {
                window.location.reload();
            } else {
                alert('update failed')
            }
            document.getElementById('btnUpdateStore').disabled = false
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน !!')
        }
    } catch (error) {
        console.log(error);
    }
}

const handleDeleteStore = async() => {
    try {
        let storeId = document.getElementById('hiddenStoreId').value
        const obj = {
            _id: storeId,
        }
        document.getElementById('btnDeleteStore').disabled = true
        const create = await asyncCallXMLHttpRequest(`${url}/delete_store`, obj)
        if (create.statusCode == '200') {
            window.location.reload();
        } else {
            alert('delete failed')
        }
        document.getElementById('btnDeleteStore').disabled = false
    } catch (error) {
        console.log(error);
    }
}